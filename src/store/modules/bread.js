const state = {
  breads: []
};

const getters = {
  breadcrumb(state) {
    return state.breads.filter(({ name }) => name);
  }
};

const mutations = {
  SET_BREADS(state, breads) {
    state.breads = breads;
  }
};

const actions = {
  async generateBreadcrumb({ commit, dispatch }, { $route, $router }) {
    const {
      meta: { breadcrumb },
      path: routePath
    } = $route;
    const bc = breadcrumb || [];
    const paths = routePath.split("/");
    const length = bc.length;

    const allPromise = bc.map(async (item, index) => {
      const path = paths.slice(0, index + 2).join("/");
      const matchComps = $router.getMatchedComponents(path);
      let name = item.name;
      if (item.action) {
        const result = await dispatch(item.action, $route);
        name = result ? result.name : "";
      }

      return {
        name,
        to: !item.disabled && index !== length - 1 && matchComps.length && path,
        path
      };
    });
    const breads = await Promise.all(allPromise);
    commit("SET_BREADS", breads);
  },
  // eslint-disable-next-line
  demoAction({ commit }, route) {
    return { name: route.params.id ? "编辑" : "新增" };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
