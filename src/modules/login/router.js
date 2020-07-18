// 路由文件
export default [
  {
    path: "/login",
    name: "index",
    component: () => import("./views/index.vue")
  }
];
