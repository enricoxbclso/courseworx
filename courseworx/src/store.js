import { createStore } from 'vuex';

export default createStore({
  state: {
    jobListings: [],
  },
  mutations: {
    addJobListing(state, listing) {
      state.jobListings.push(listing);
    },
  },
  actions: {
    addJobListing({ commit }, listing) {
      commit('addJobListing', listing);
    },
  },
  getters: {
    getJobListings: (state) => state.jobListings,
  },
});
