import Vue from 'vue';
import Vuex from 'vuex';
import router from "./router";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        saved: [],
        listing_summaries: [],
        listings: [],
        auth: false
    },
    mutations: {
        toggleSaved(state, id) {
            if (state.auth) {
                let index = state.saved.findIndex(saved => saved === id);
                if (index === -1) {
                    state.saved.push(id);
                } else {
                    state.saved.splice(index, 1);
                }
            } else {
                router.push('/login');
            }
        },
        addData(state, { route, data }) {
            if (data.auth) {
                state.auth = data.auth;
            }
            if (route === 'listing') {
                state.listings.push(data.listing);
            } else {
                state.listing_summaries = data.listings;
            }
        }
    },
    getters: {
        getListing(state) {
            return id => state.listings.find(listing => id == listing.id);
        }
    }
});
