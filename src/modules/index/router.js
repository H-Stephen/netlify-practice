import moduleLayout from "@/layouts/module-layout/index.vue";
const INDEX = { name: "首页" };
const DEMO_ACTION = { name: "", action: "demoAction", disabled: true };
// 路由文件
export default [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: moduleLayout,
    children: [
      {
        path: "/",
        name: "Index",
        component: () => import("./views/index/index.vue"),
        meta: {
          breadcrumb: [INDEX]
        }
      }
    ]
  },
  {
    path: "/index2",
    component: moduleLayout,
    children: [
      {
        path: "/",
        name: "Index2",
        component: () => import("./views/index/index2.vue"),
        meta: {
          breadcrumb: [DEMO_ACTION]
        }
      }
    ]
  }
];
