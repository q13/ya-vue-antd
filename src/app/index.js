/**
 * App hook
 */
import hook from '+/deps/hook';
import {
} from '@/deps/utils';
import template from './template.html';

// 数据挂钩
hook('prepare@app', function () {
  return {
    appData: null,
    routerOptions: {}
  };
});
// App component挂钩，将component configs传递给resolve完成初始化
hook('create@app', function (options) {
  return {
    template,
    mounted() {
      console.log('route', this.$route);
    }
  };
});
