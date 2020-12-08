import Vue from "vue";

import ElementUI, { Message, MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import axios from "./axios";

Vue.prototype.$axios = axios;

Vue.use(ElementUI, {
  size: "small" // set element-ui default size
});

/* 以下代码解决消息多次弹出的问题-如需要可解开注释
let messageInstance = null;
const overrideMessage = (options) => {
  if(messageInstance) {
    messageInstance.close();
  }
  messageInstance = Message(options);
};
*/

/** 重写element-ui $messag **/
const overrideMessage = options => Message(options);

["error", "success", "info", "warning"].forEach(type => {
  overrideMessage[type] = options => {
    if (typeof options === "string") {
      options = {
        message: options
      };
    }
    options = {
      type,
      duration: 1500,
      ...options
    };
    return overrideMessage(options);
  };
});

Vue.prototype.$message = overrideMessage;

/**
 * @param() title 标题
 * @param() text 文本文案
 * @param() confirm 传入的 promise
 *
 * 解决的问题:
 *    confirm 是 element-ui 的一个 确认消息(messageBox) 消息组件
 * 但是我们一般会在用户交互问答后发送请求，此时该组件原本没有提供 loading 接口，故制作一个满足业务需求的 confirm
 */
Vue.prototype.$loadingConfirm = function({
  title = "提示",
  text,
  confirm,
  confirmButtonText = "确定",
  cancelButtonText = "取消",
  type = "warning",
  ...config
}) {
  if (typeof confirm !== "function") {
    throw new Error("confirm must be function");
  }
  return MessageBox.confirm(text, title, {
    confirmButtonText,
    cancelButtonText,
    type,
    ...config,
    beforeClose: (action, instance, done) => {
      if (action === "confirm") {
        const handleClose = () => {
          instance.confirmButtonLoading = false;
          done();
        };
        instance.confirmButtonLoading = true;
        let confirmRes = confirm();
        if (!(confirmRes instanceof Promise)) {
          confirmRes = Promise.resolve(confirmRes);
        }
        confirmRes.finally(handleClose);
      } else {
        return done();
      }
    }
  }).catch(e => {
    console.warn(e);
  });
};
