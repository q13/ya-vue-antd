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
 */
export default t(Col);
