import Cookies from "js-cookie";

const login = params => {
  return params;
};

const removeCookieItem = item => {
  return Cookies.remove(item);
};

const state = {
  token: "",
  userId: "",
  username: "",
  avatar: "游客头像"
};

const mutations = {
  SET_TOKEN(state, token) {
    Cookies.set("token", token);
    state.token = token;
  }
};

const actions = {
  // user login
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      login(params)
        .then(res => {
          // handle res
          const { token } = res;
          commit("SET_TOKEN", token);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise(resolve => {
      Cookies.remove(state.token);
      commit("SET_TOKEN", "");
      removeCookieItem("token");
      resolve();
      window.location.reload();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
