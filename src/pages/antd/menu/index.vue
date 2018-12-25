<template>
  <div class="antd-menu">
    <antd-menu
      @click="handleClick"
      :selectedKeys="selectedKeys"
      :defaultOpenKeys="defaultOpenKeys"
      :mode="mode"
    >
      <menu-item react-key="mail">
        Navigation One
      </menu-item>
      <menu-item react-key="app" :disabled="true">
        Navigation Two
      </menu-item>
      <sub-menu react-key="dropdown" title="React element">
        <menu-item-group title="Item 1">
          <menu-item react-key="setting:1">Option 1</menu-item>
          <menu-item react-key="setting:2">Option 2</menu-item>
        </menu-item-group>
        <menu-item-group title="Item 2">
          <menu-item react-key="setting:3">Option 3</menu-item>
          <menu-item react-key="setting:4">Option 4</menu-item>
        </menu-item-group>
      </sub-menu>
      <menu-item react-key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </menu-item>
    </antd-menu>
  </div>
</template>
<script>
/* eslint-disable */
import '@/widgets/antd/components/menu/styles/antd.css';
import {
  Menu,
  MenuItem,
  SubMenu,
  MenuItemGroup
} from '@/widgets/antd/components/menu';

export default {
  data() {
    return {
      defaultOpenKeys: ['dropdown'],
      selectedKeys: ['alipay'],
      mode: 'horizontal'
      // mode: 'inline'
    };
  },
  mounted() {
  },
  methods: {
    handleClick(evt) {
      console.log('click ', evt);
      this.selectedKeys = [evt.key];
    }
  },
  components: {
    AntdMenu: Menu,
    MenuItem,
    SubMenu,
    MenuItemGroup
  }
}
</script>
