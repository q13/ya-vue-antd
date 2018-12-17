/**
 * App hook
 */
import hook from '+/deps/hook';
import {
  setAppData,
  c2s
} from '@/deps/utils';
import template from './template.html';
import '../widgets/themes/ya/index.styl';

// 数据挂钩
hook('prepare@app', function () {
  return {
    appData: null,
    routerOptions: {}
  };
});
// App component挂钩，将component configs传递给resolve完成初始化
hook('create@app', function (options) {
  // Set default request params
  setAppData('$defaultRequestData', ({
    url
  }) => {
    if (url === 'xxx') {
      return null;
    } else {
      return {
        a: 1,
        b: 2
      };
    }
  });

  return {
    template,
    mounted() {
      console.log('route', this.$route);
      c2s({
        url: 'test',
        onSuccess(result) {
          console.log('c2s', result);
        }
      });
    }
  };
});
