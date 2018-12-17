/**
 * 入口文件
 */
// import '@babel/polyfill';
import { Vue } from '+/deps/env';
import bootstrap from '+/app';
import './app/index';
import storeGenerator from './app/store';
import sitmapGenerator from './app/sitmap';
import errorCode from './deps/error-code';

const App = bootstrap({
  initailStore: storeGenerator(),
  initailSitmap: sitmapGenerator(),
  initailErrorCode: errorCode
});
new Vue({
  el: '#app',
  render: h => h(App)
});
