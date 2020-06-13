import "core-js/features/object/assign";
import Vue from 'vue';
import router from './router';
import store from  './store';
import App from '../components/App.vue';

var app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
