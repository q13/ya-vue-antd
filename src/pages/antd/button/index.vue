<template>
  <antd-button :on-click="handleClick" :loading="true">Test</antd-button>
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
