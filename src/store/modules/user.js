import Cookies from "js-cookie";

import cookieKeys from "@/const/cookie-keys";

// const login = params => {
//   return params;
// };

const removeCookieItem = item => {
  return Cookies.remove(item);
};

const state = {
  token: "",
  userId: "",
  username: "",
  avatar: ""
};

const mutations = {
  SET_TO_COOKIE(state, data) {
    Object.entries(data).forEach(([key, val]) => {
      state[key] = val;
      Cookies.set(key, val);
    });
  }
};

const actions = {
  // user login
  login({ commit }, params) {
    return new Promise(resolve => {
      const res = {
        ...params,
        token: "token-value-123456"
      };
      commit("SET_TO_COOKIE", res); // 假数据流
      resolve();
      // login(params)
      //   .then(res => {
      //     // handle res
      //     const { token } = res;
      //     commit("SET_TOKEN", token);
      //     resolve()
      //   })
      //   .catch(error => {
      //     reject(error);
      //   });
    });
  },

  // user logout
  logout({ state }) {
    return new Promise(resolve => {
      Cookies.remove(state.token);
      // commit("SET_TOKEN", "");
      removeCookieItem("token");
      resolve();
      window.location.reload();
    });
  },

  getUserInfoFromCookie({ commit }) {
    const data = cookieKeys.reduce((pre, cur) => {
      pre[cur] = Cookies.get(cur);
      return pre;
    }, {});
    commit("SET_TO_COOKIE", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
