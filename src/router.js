import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/dash"
    },
    {
      path: "/",
      name: 'home',
      meta: { title: "首页" },
      component: () => import(/* webpackChunkName: "home" */ "@/components/common/Home"),
      children: [
        {
          path: "/dash",
          name: "dash",
          meta: { title: '首页' },
          component: () => import(/* webpackChunkName: "dash" */ "@/components/pages/Dash")
        },
        {
          path: "/chart",
          name: "chart",
          meta: { title: '图表' },
          component: () => import(/* webpackChunkName: "chart" */ "@/components/pages/Chart")
        },
        {
          path: "/draglist",
          name: "draglist",
          meta: { title: '拖拽列表' },
          component: () => import(/* webpackChunkName: "draglist" */ "@/components/pages/Draglist")
        },
        {
          path: "/icon",
          name: "icon",
          meta: { title: '图标' },
          component: () => import(/* webpackChunkName: "icon" */ "@/components/pages/Icon")
        },
        {
          path: "/form",
          name: "form",
          meta: { title: '基础表单' },
          component: () => import(/* webpackChunkName: "form" */ "@/components/pages/Basicfrom")
        },
        {
          path: "/up",
          name: "up",
          meta: { title: '文件上传' },
          component: () => import(/* webpackChunkName: "up" */ "@/components/pages/Upload")
        },
        {
          path: "/rich",
          name: "rich",
          meta: { title: '富文本编辑器' },
          component: () => import(/* webpackChunkName: "rich" */ "@/components/pages/Richcompiler")
        },
        {
          path: "/mark",
          name: "mark",
          meta: { title: 'markdown编辑器' },
          component: () => import(/* webpackChunkName: "mark" */ "@/components/pages/Markdown")
        },
        {
          path: "/tab",
          name: "tab",
          meta: { title: 'tab选项卡' },
          component: () => import(/* webpackChunkName: "tab" */ "@/components/pages/Tab")
        },
        {
          path: "/table",
          name: "table",
          meta: { title: '表格' },
          component: () => import(/* webpackChunkName: "table" */ "@/components/pages/Table")
        },
        {
          path: '/404',
          name: '404',
          meta: { title: '404页面' },
          component: () => import(/* webpackChunkName: "404" */ '@/components/gradePages/404')
        },
        {
          path: '/403',
          name: '403',
          meta: { title: '无权限访问' },
          component: () => import(/* webpackChunkName: "403" */ '@/components/gradePages/403')
        }
      ]
    },
    {
      path: '/err/404',
      name: 'err404',
      meta: { title: '404' },
      component: () => import(/* webpackChunkName: "err404" */ '@/components/gradePages/404')
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: () => import(/* webpackChunkName: "login" */ '@/components/gradePages/Login')
    },
    {
      path: "*",
      redirect: "/err/404"
    }
  ]
});
