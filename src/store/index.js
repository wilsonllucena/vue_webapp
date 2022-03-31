import { createStore } from 'vuex'

export default createStore({
  state: {
    page: {
      title: '',
    },
    navActive: false,
  },
  getters: {
  },
  mutations: {
    setPageTitle(state, payload) {
      state.page.title = payload;
    },
    setMenuActive(state, payload) {
      state.navActive = payload;
    }
  },
  actions: {

  },
  modules: {
  }
})
