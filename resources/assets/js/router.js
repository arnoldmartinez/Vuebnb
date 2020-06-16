import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomePage from '../components/HomePage.vue';
import ListingPage from '../components/ListingPage.vue';
import axios from 'axios';
import store from './store';

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/listing/:listing', component: ListingPage, name: 'listing' }
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    let serverData = JSON.parse(window.vuebnb_server_data);
    if (!serverData.path || to.path !== serverData.path) {
        axios.get(`/api${to.path}`).then(({data}) => {
            store.commit('addData', {route: to.name, data});
            next();
        });
    } else {
        store.commit('addData', {route: to.name, data: serverData});
    }
});

export default router;