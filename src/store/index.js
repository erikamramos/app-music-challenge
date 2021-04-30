import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedSong: null,
    results: [],
    selectedArtist: {},
    selectedFilter: "",
  },
  getters: {
    results: state => state.results? state.results : [],
    songs: state => state.results? state.results : [],
    selectedSong: state => state.selectedSong? state.selectedSong : []
  },
  mutations: {
    getResults (state, payload) {
      state.results = payload
    },
    selectSong (state, payload) {
      state.selectedSong = payload
    },
  },
  actions: {
    async selectSong (ctx, song) {
      ctx.commit("selectSong", song)
    },
    async getResults (ctx, data) {
      ctx.commit("getResults", data)
    },
  },
  modules: {
  }
})
