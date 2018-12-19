<template>
  <div class="antd-grid">
    <row type="flex" justify="space-between">
      <antd-col ref="col1" :span="4">col-4</antd-col>
      <antd-col :span="4">col-4</antd-col>
      <antd-col :span="4" :react-ref="onReactRef">
        <div ref="rendered"></div>
      </antd-col>
      <!-- test -->
      <antd-col :span="4">
        <child-component ref="childCpt">
          <div ref="notRender"></div>
        </child-component>
      </antd-col>
    </row>
    <child-component>
    </child-component>
  </div>
</template>
<script>
import '@/widgets/antd/components/grid/styles/antd.css';
import {
  Row,
  Col
} from '@/widgets/antd/components/grid';

export default {
  mounted() {
    console.log('$refs', this.$refs);
  },
  methods: {
    onReactRef(ref) {
      console.log('react-ref', ref);
    }
  },
  components: {
    Row,
    AntdCol: Col,
    ChildComponent: {
      template: '<div><div>123</div><row type="flex" justify="space-between"><antd-col :span="8">col-8</antd-col><antd-col :span="8">col-8</antd-col></row></div>',
      components: {
        Row,
        AntdCol: Col
      }
    }
  }
}
</script>
