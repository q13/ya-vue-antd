/**
 * Col（栅格）
 * @module antd/col
 * @example
 * import Col from 'ya-vue-antd/src/widgets/antd/components/col';
 * // See [示例入口]{@link http://#/antd/grid}
 */
/**
 * Class
 * @typedef {Vue} Col
 */
import t from '@/deps/rv/t';
import Col from 'antd/lib/col';

/**
 * @vue-prop {number} [offset=0] - 栅格左侧的间隔格数，间隔内不可以有栅格
 * @vue-prop {number} [order=0] - 栅格顺序，flex 布局模式下有效
 * @vue-prop {number} [pull=0] - 栅格向左移动格数
 * @vue-prop {number} [push=0] - 栅格向右移动格数
 * @vue-prop {number} [span] - 栅格占位格数，为 0 时相当于 display: none
 * @vue-prop {number|object} [xs] - <576px 响应式栅格，可为栅格数或一个包含其他属性的对象
 * @vue-prop {number|object} [sm] - ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象
 * @vue-prop {number|object} [md] - ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象
 * @vue-prop {number|object} [lg] - ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象
 * @vue-prop {number|object} [xl] - ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
 * @vue-prop {number|object} [xxl] - ≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
 */
export default t(Col);
