import "core-js/features/object/assign";
import Vue from 'vue';

import ListingPage from "../components/ListingPage";

var app = new Vue({
    el: '#app',
    render: h => h(ListingPage)
});
