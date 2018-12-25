/**
 * Transform react component to vue component
 */
// import {
//   isEqual
// } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import Vue from 'vue';

var store = new Map(); // 存储转换过的组件类，不重复生成

/**
 * Transform vue children to react component
 */
class C extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderVueComponent() {
    const props = this.props;
    const slot = props.slot; // vue slot
    let vueComponent = this.vueComponent;
    if (!vueComponent) {
      const el = this.v;
      const {
        innerTag = 'div',
        innerClass = ''
      } = getNormalizeProps(props);
      vueComponent = new Vue({
        el,
        data: {
          slot
        },
        render(h) {
          return h(innerTag, {
            class: getNormalizeClass(innerClass)
          }, this.slot);
        }
      });
      this.vueComponent = vueComponent;
    } else {
      vueComponent.slot = slot;
    }
  }
  componentDidMount() {
    this.renderVueComponent();
  }
  // componentWillReceiveProps() {
  // }
  // shouldComponentUpdate() {
  //   return true;
  // }
  componentDidUpdate() {
    this.renderVueComponent();
  }
  componentWillUnmount() {
    if (this.vueComponent) {
      this.vueComponent.$destroy();
      this.vueComponent = null;
    }
  }
  render() {
    const props = this.props;
    const {
      innerTag = 'div',
      innerClass = ''
    } = getNormalizeProps(props);
    return React.createElement(innerTag, {
      ref: (el) => {
        this.v = el;
      },
      className: getNormalizeClass(innerClass, 'react')
    }, null);
  }
}
/**
 * 返回转换函数
 * @param {object} options - 配置项
 */
export default function (R, options) {
  // 父级component的options会覆盖子component的options
  options = {
    defaultProps: {}, // 默认prop
    enableInnerStrip: true, // 默认把Vue children里的文本和react组件直接作为R children渲染
    excludeNullableStringChildren: false, // 将待转换为react的vue空字符串子节点过滤点，默认不过滤
    ...(options || {})
  };
  var V = store.get(R);
  if (!V) {
    V = Vue.extend({
      Reactor: R,
      inheritAttrs: false, // class/style except
      methods: {
        renderReactComponent() {
          const attrs = this.$attrs;
          const slot = this.$slots.default;
          const listeners = this.$listeners;
          // let reactRenderedDom = this.reactRenderedDom; // 兼容preact
          const {
            outerTag,
            innerTag,
            outerClass,
            innerClass,
            reactRef,
            reactKey,
            ...restAttrs
          } = getNormalizeProps(attrs, options.defaultProps);
          // 组装成react props
          var reactProps = {
            ...restAttrs,
            ref: reactRef, // 重命名react component ref
            key: reactKey // 重命名react component key
          };
          Object.keys(listeners).forEach((eventName) => {
            reactProps['on' + capitalize(eventName)] = listeners[eventName];
          });
          // 短路，把Vue children里的文本和react组件直接作为R children渲染
          let reactChildren = null;
          // console.log('vue-children', slot);
          if (options.enableInnerStrip) {
            reactChildren = (function applyChildren({
              children,
              innerTag,
              innerClass
            }) {
              const reactChildren = children ? children.map((child) => {
                const nonNullableChildText = (child.text || '').trim();
                const childText = options.excludeNullableStringChildren ? (!nonNullableChildText ? undefined : nonNullableChildText) : child.text; // 过滤空字符串子节点
                if (typeof child.tag === 'undefined' && typeof childText === 'undefined') { // 认为是无效vnode
                  return null;
                }
                if (typeof child.tag === 'undefined' && !!childText) { // 认为是纯文本
                  return child.text;
                } else {
                  const componentOptions = child.componentOptions;
                  if (componentOptions) {
                    const Reactor = child.componentOptions.Ctor.options.Reactor; // 可能中间值有undefined出现
                    if (Reactor) { // 认为是React component
                      const attrs = child.data.attrs || {};
                      const {
                        innerTag,
                        innerClass,
                        reactRef,
                        reactKey,
                        ...restAttrs
                      } = getNormalizeProps(attrs);
                      return React.createElement(Reactor, {
                        ...restAttrs,
                        ref: reactRef,
                        key: reactKey
                      }, applyChildren({
                        children: componentOptions.children,
                        innerTag,
                        innerClass
                      }));
                    }
                  }
                }
                // 默认认为是Vue component，需要转换成React component，不用考虑deep children问题，C会处理
                return React.createElement(C, {
                  slot: children,
                  innerTag,
                  innerClass
                }, null);
              }).filter((item) => { // 过滤有效vnode
                return !!item;
              }) : null;
              // console.log('react-children2', reactChildren);
              return reactChildren;
            })({
              children: slot,
              innerTag,
              innerClass
            });
          } else { // 把Vue slot转成 React component再传递给C
            reactChildren = slot ? React.createElement(C, {
              slot,
              innerTag,
              innerClass
            }, null) : null;
          }
          // debugger;
          const r = React.createElement(R, reactProps, reactChildren);
          this.$r = r; // 保存react引用
          return ReactDOM.render(r, this.$refs.r);
        }
      },
      mounted() {
        this.renderReactComponent();
      },
      updated() {
        this.renderReactComponent();
      },
      beforeDestroy() {
        this.$r = null; // 释放$r引用
        ReactDOM.unmountComponentAtNode(this.$refs.r);
      },
      render(h) {
        const {
          outerTag = 'div',
          outerClass = ''
        } = getNormalizeProps(this.$attrs, options.defaultProps);
        return h(outerTag, {
          ref: 'r',
          class: getNormalizeClass(outerClass)
        });
      }
    });
  }
  return V;
};
/**
 * 中划线转驼峰式
 * @param {string} str - string
 */
function strike2camelCase(str) {
  return (str + '').replace(/-\D/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
/**
 * 首字母大写
 * @param {string} str - string
 */
function capitalize(str) {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('');
}
/**
 * 标准化class
 * @param {Mix} value - 混合类型，可能是string/object/array
 * @param {string} type - vue/react
 */
function getNormalizeClass(value, type = 'vue') {
  var result = {};
  if (typeof value === 'string') {
    value = value.split(/\s+/).filter((v) => {
      return !!v;
    });
    if (value.length) {
      value.forEach((className) => {
        result[className] = true;
      });
    }
  } else if (Array.isArray(value)) {
    value.forEach((className) => {
      result[className] = true;
    });
  } else {
    result = value;
  }
  if (type === 'react') {
    result = Object.keys(result).filter((className) => {
      return result[className];
    }).join(' ');
  }
  return result;
}

/**
 * 标准化属性
 * @param {object} props - 待格式化属性
 */
function getNormalizeProps(props, defaultProps = {}) {
  // Like on-click transform to onClick
  return Object.keys(props).reduce((pv, cv) => {
    return {
      ...pv,
      [strike2camelCase(cv)]: props[cv]
    };
  }, {
    ...defaultProps
  });
}
