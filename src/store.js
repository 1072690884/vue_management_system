import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navTepy: false
  },
  mutations: {
    setState(state, obj) {
      state.navTepy = obj
    }
  },
  actions: {}
});
