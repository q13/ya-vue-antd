<template>
  <div class="antd-button">
    <antd-button :on-click="handleClick">Button1</antd-button>
    <antd-button type="primary" :loading="true">Button2</antd-button>
  </div>
</template>
<script>
import '@/widgets/antd/components/button/styles/antd.css';
import Button from '@/widgets/antd/components/button';

export default {
  components: {
    AntdButton: Button
  },
  methods: {
    handleClick(evt) {
      console.log('Click', evt);
    }
  }
}
</script>
