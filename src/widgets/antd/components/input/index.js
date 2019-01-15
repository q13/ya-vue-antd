/**
 * Form（表单）
 * @module antd/form
 * @example
 * import Input from 'ya-vue-antd/src/widgets/antd/components/input';
 * // See [示例入口]{@link http://#/antd/form}
 */
import t from '@/deps/rv/t';
import Input from 'antd/lib/input';

export default t(Input, {
  defaultProps: {
    outerTag: 'span'
  }
});
