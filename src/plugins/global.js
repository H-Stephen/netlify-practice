import Vue from "vue";

import ElementUI, { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
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
