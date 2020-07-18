import router from "../router";
import store from "../store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import Cookies from "js-cookie";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; //  whitelist

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  // set page title
  // document.title = to.meta.title

  const { path } = to;

  // 鉴权白名单
  if (whiteList.indexOf(path) > -1) {
    next();
    return;
  }

  const token = Cookies.get("token");

  if (!token || token === "undefined") {
    // 没有token重新登录
    next("/login");
    return;
  }

  // 从cookie中获取数据 - 应对刷新
  store.dispatch("user/getUserInfoFromCookie");

  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
