import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import swiper from 'vue-awesome-swiper';


import "./plugins/element.js";
import "./assets/css/reset.css";
import "./assets/icon/iconfont.css";
import 'swiper/dist/css/swiper.css';
import 'mavon-editor/dist/css/index.css';


Vue.config.productionTip = false;

Vue.use(swiper);




//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  // if (navigator.userAgent.indexOf('MSIE') > -1) {
  //   // 简单的判断IE10及以下不支持
  //   Vue.prototype.$alert('不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
  //     confirmButtonText: '确定'
  //   });
  //   return;
  // } else {
  const role = localStorage.getItem('ms_username');
  console.log(!role, to.path)
  if (!role && to.path !== '/login') {
    next('/login');
    return
  } else {
    if (role && to.path == '/login') {
      next('/');
    } else {
      next();
    }

  }
  // }

})






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
