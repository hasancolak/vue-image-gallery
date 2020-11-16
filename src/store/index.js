import Vue from 'vue';
import Vuex from 'vuex';
import galleryStore from './gallery';

Vue.use(Vuex);

 const store = new Vuex.Store({
  modules: {
    galleryStore
  },
  state: {},
  mutations: {},
  actions: {}
});

export default store;
