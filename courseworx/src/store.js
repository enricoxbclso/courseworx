import { createStore } from "vuex";

const store = createStore({
  state: {
    jobListings: []
  },
  mutations: {
    SET_JOB_LISTINGS(state, listings) {
      console.log(listings);
      state.jobListings = listings;
    }
  },
  actions: {
    updateJobListings({ commit }, listings) {
      commit("SET_JOB_LISTINGS", listings);
    }
  },
  getters: {
    getJobListings(state) {
      return state.jobListings;
    }
  }
});

export default store;
