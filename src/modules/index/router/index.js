// 路由文件
export default [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index/index.vue")
  }
];
