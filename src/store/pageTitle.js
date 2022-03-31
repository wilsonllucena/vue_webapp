import { createStore } from 'vuex'

export default createStore({
  state: {
    page: {
      title: '',
    },
  },
  getters: {
  },
  mutations: {
    setPageTitle(state, payload) {
      state.page.title = payload;
    }
  },
  actions: {

  },
  modules: {
  }
})
