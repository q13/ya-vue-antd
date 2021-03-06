/**
 * 导航菜单（Menu）
 * @module antd/menu
 * @example
 * import Menu from 'ya-vue-antd/src/widgets/antd/components/menu';
 * // See [示例入口]{@link http://#/antd/menu}
 */
/**
 * Class
 * @typedef {Vue} Menu
 */
/**
 * 点击 MenuItem 调用此函数
 * @callback module:antd/menu~MenuOnClick
 * @param {object} data - 回调参数
 * @param {object} data.item - Menu item
 * @param {string} data.key - Menu item key
 * @param {string} data.keyPath - Menu item key path
 */
/**
 * 取消选中时调用，仅在 multiple 生效
 * @callback module:antd/menu~MenuOnDeselect
 * @param {object} data - 回调参数
 * @param {object} data.item - Menu item
 * @param {string} data.key - Menu item key
 * @param {string[]} data.selectedKeys - 当前选中的菜单项 key 数组
 */
/**
 * SubMenu 展开/关闭的回调
 * @callback module:antd/menu~MenuOnOpenChange
 * @param {string[]} openKeys - 当前展开的菜单项key
 */
/**
 * 被选中时调用
 * @callback module:antd/menu~MenuOnSelect
 * @param {object} data - 回调参数
 * @param {object} data.item - Menu item
 * @param {string} data.key - Menu item key
 * @param {string[]} data.selectedKeys - 当前选中的菜单项 key 数组
 */
/**
 * 被选中时调用
 * @callback module:antd/menu~SubItemOnTitleClick
 * @param {object} data - 回调参数
 * @param {string} data.key - Menu item key
 * @param {HTMLEvent} data.domEvent - HTML event
 */

import t from '@/deps/rv/t';
import Menu_ from 'antd/lib/menu';
/**
 * @var {Vue} Menu
 * @static
 * @vue-prop {string[]} [defaultOpenKeys] - 初始展开的 SubMenu 菜单项 key 数组
 * @vue-prop {string[]} [defaultSelectedKeys] - 初始选中的菜单项 key 数组
 * @vue-prop {boolean} [forceSubMenuRender=false] - 在子菜单展示之前就渲染进 DOM
 * @vue-prop {boolean} [inlineCollapsed] - inline 时菜单是否收起状态
 * @vue-prop {number} [inlineIndent=24] - inline 模式的菜单缩进宽度
 * @vue-prop {vertical|horizontal|inline} [mode=vertical] - 菜单类型，现在支持垂直、水平、和内嵌模式三种
 * @vue-prop {boolean} [multiple=false] - 是否允许多选
 * @vue-prop {string[]} [openKeys] - 当前展开的 SubMenu 菜单项 key 数组
 * @vue-prop {boolean} [selectable=true] - 是否允许选中
 * @vue-prop {string[]} [selectedKeys] - 当前选中的菜单项 key 数组
 * @vue-prop {object} [style] - 根节点样式
 * @vue-prop {number} [subMenuCloseDelay=0.1] - 用户鼠标离开子菜单后关闭延时，单位：秒
 * @vue-prop {number} [subMenuOpenDelay=0] - 用户鼠标进入子菜单后开启延时，单位：秒
 * @vue-prop {light|dark} [theme=light] - 主题颜色
 * @vue-prop {MenuOnClick} [onClick=() => void] - 点击 MenuItem 调用此函数，[MenuOnClick]{@link module:antd/menu~MenuOnClick}，查看[示例]{@link http://#/antd/menu}
 * @vue-prop {MenuOnDeselect} [onDeselect=() => void] - 取消选中时调用，仅在 multiple 生效，[MenuOnDeselect]{@link module:antd/menu~MenuOnDeselect}
 * @vue-prop {MenuOnOpenChange} [onOpenChange=() => void] - SubMenu 展开/关闭的回调，[MenuOnOpenChange]{@link module:antd/menu~MenuOnOpenChange}
 * @vue-prop {MenuOnSelect} [onSelect=() => void] - 被选中时调用，[MenuOnSelect]{@link module:antd/menu~MenuOnSelect}
 */
const Menu = t(Menu_, {
  defaultProps: {
    outerTag: 'div'
  },
  excludeNullableStringChildren: true
});
/**
 * @var {Vue} MenuItem
 * @static
 * @vue-prop {boolean} [disabled=false] - 是否禁用
 * @vue-prop {string} [key] - item 的唯一标志
 * @vue-prop {string} [title] - 设置收缩时展示的悬浮标题
 */
const MenuItem = t(Menu_.Item);

/**
 * @var {Vue} SubItem
 * @static
 * @vue-prop {boolean} [disabled=false] - 是否禁用
 * @vue-prop {string} [key] - item 的唯一标志
 * @vue-prop {string} [title] - 设置收缩时展示的悬浮标题
 * @vue-prop {SubItemOnTitleClick} [onTitleClick=() => void] - 点击子菜单标题回调，[SubItemOnTitleClick]{@link module:antd/menu~SubItemOnTitleClick}
 */
const SubMenu = t(Menu_.SubMenu);

/**
 * @var {Vue} MenuItemGroup
 * @static
 * @vue-prop {string} [title] - 分组标题
 */
const MenuItemGroup = t(Menu_.ItemGroup);

export {
  Menu,
  MenuItem,
  SubMenu,
  MenuItemGroup
};
