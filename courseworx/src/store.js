import { createStore } from "vuex";

const store = createStore({
  state: {
    jobListings: []
  },
  mutations: {
    updateJobListings(state, listings) {
      state.jobListings = listings;
    }
  },
  actions: {
    updateJobListings({ commit }, listings) {
      commit("updateJobListings", listings);
    }
  },
  getters: {
    getJobListings(state) {
      return state.jobListings;
    }
  }
});

export default store;
