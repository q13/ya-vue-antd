/**
 * Button（按钮）
 * @module antd/button
 * @example
 * import Button from 'ya-vue-antd/src/widgets/antd/components/button';
 * // See [示例入口]{@link http://#/antd/button}
 */
/**
 * Class
 * @typedef {Vue} Button
 */
/**
 * 按钮点击回调
 * @callback onClick
 * @param {ReactEvent} event - Click点击事件
 */

import t from '@/deps/rv/t';
import Button from 'antd/lib/button';
/**
 * @vue-prop {boolean} [disabled=false] - 按钮失效状态
 * @vue-prop {boolean} [ghost=false] - 幽灵属性，使按钮背景透明
 * @vue-prop {string} [href] - 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
 * @vue-prop {string} [htmlType=button] - 设置 button 原生的 type 值，可选值请参考 [HTML 标准]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type}
 * @vue-prop {string} [icon] - 设置按钮的图标类型
 * @vue-prop {boolean | object} [loading=false] - 设置按钮载入状态
 * @vue-prop {number} [loading.delay] - 设置按钮载入延时消失时间(ms)
 * @vue-prop {string} [shape] - 设置按钮形状，可选值为 circle 或者不设
 * @vue-prop {string} [size=default] - 设置按钮大小，可选值为 small large 或者不设
 * @vue-prop {string} [target] - 相当于 a 链接的 target 属性，href 存在时生效
 * @vue-prop {string} [type] - 设置按钮类型，可选值为 primary dashed danger或者不设
 * @vue-prop {boolean} [block=false] - 将按钮宽度调整为其父宽度的选项
 * @vue-prop {onClick} [onClick=(event) => void] - 点击按钮时的回调，[onClick]{@link module:antd/button~onClick}，查看[示例]{@link http://#/antd/button}
 */
export default t(Button, {
  defaultProps: {
    outerTag: 'span'
  }
});
