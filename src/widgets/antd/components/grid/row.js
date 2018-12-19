/**
 * Row（栅格）
 * @module antd/row
 * @example
 * import Row from 'ya-vue-antd/src/widgets/antd/components/row';
 * // See [示例入口]{@link http://#/antd/grid}
 */
/**
 * Class
 * @typedef {Vue} Row
 */
import t from '@/deps/rv/t';
import Row from 'antd/lib/row';

/**
 * @vue-prop {string} [align=top] - flex 布局下的垂直对齐方式：top middle bottom
 * @vue-prop {number|object} [gutter=0] - 栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}
 * @vue-prop {string} [justify=start] - flex 布局下的水平排列方式：start end center space-around space-between
 * @vue-prop {string} [type] - 布局模式，可选 flex，[现代浏览器]{@link https://caniuse.com/#search=flex} 下有效
 */
export default t(Row);
