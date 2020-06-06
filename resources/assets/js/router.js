import Vue from 'vue';
import VueRouter from 'vue-router';
import ListingPage from "../components/ListingPage";

Vue.use(VueRouter);

export default new VueRouter({
    mode: history,
    routes: [
        //{ path: '/', component: HomePage },
        { path: '/listing/:listing', component: ListingPage }
    ]
});
