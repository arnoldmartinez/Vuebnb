import "core-js/features/object/assign";
import Vue from 'vue';

import ListingPage from "../components/ListingPage";
import router from './router';

var app = new Vue({
    el: '#app',
    render: h => h(ListingPage),
    router
});
