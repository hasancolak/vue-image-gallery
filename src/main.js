import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import NProgress from 'nprogress';
import SvgIcon from 'vue-svgicon';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import '@/assets/scss/index.scss';
import { handleGetRequestLoading, handleGetResponseLoading } from './service/http';
import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

Vue.use(infiniteScroll);

Vue.use(SvgIcon, {
  tagName: 'svg-icon'
});

handleGetRequestLoading(() => NProgress.start());
handleGetResponseLoading(() => NProgress.done());

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
