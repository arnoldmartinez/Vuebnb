import "core-js/features/object/assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';
import ImageCarousel from "../components/ImageCarousel";
import ModalWindow from "../components/ModalWindow.vue";
import HeaderImage from "../components/HeaderImage.vue";
import FeatureList from "../components/FeatureList";

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true,
    }),
    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        },
        escapeKeyListener: function(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    watch: {
      modalOpen: function() {
        var className = 'modal-open';
        if (this.modalOpen) {
        document.body.classList.add(className);
        } else {
        document.body.classList.remove(className);
        }
      }
    },
    created: function() {
      document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function () {
      document.removeEventListener('keyup', this.escapeKeyListener);
    },
    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage,
        FeatureList
    }
});
