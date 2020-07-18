import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const requireComponent = require.context(
  // 其组件目录的相对路径
  "../modules",
  // 是否查询其子目录
  true,
  // 匹配基础文件名的正则表达式
  /router.js$/
);

// 获取路由集合
let routes = requireComponent.keys().reduce((pre, cur) => {
  return pre.concat(requireComponent(cur).default);
}, []);

// 使用*通配符匹配404页面-放在路由数组最后
const notFound = [
  {
    path: "*",
    name: "notFound",
    component: () => import("@/components/notFound.vue")
  }
];
routes = routes.concat(notFound);

const router = new VueRouter({
  routes
  // mode: "history"
});

export default router;
