import { createStore } from 'vuex'

export default createStore({
  state: {
    page: {
      title: '',
    },
    navActive: false,
    events: []
    
  },
  getters: {
  },
  mutations: {
    setPageTitle(state, payload) {
      state.page.title = payload;
    },
    setMenuActive(state, payload) {
      state.navActive = payload;
    },
    setEventSelected(state, payload) {
      state.events = payload;
    }

  },
  actions: {

  },
  modules: {
  }
})
