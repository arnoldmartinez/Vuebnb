<template>
    <div class="home-container">
        <listing-summary-group v-for="(group, country) in listing-groups" :key="country" :listings="group" :country="country" class="listing-summary-group"></listing-summary-group>
    </div>
</template>
<script>
    import routeMixin from '../js/route-mixin';
    import ListingSummaryGroup from './ListingSummaryGroup.vue';
    import { groupByCountry } from '../js/helpers';

    import axios from 'axios';

    export default {
        mixins: [ routeMixin ],
        data() {
            return {
                listing_groups: []
            };
        },
        methods: {
            assignData({ listings }) {
                this.listing_groups = groupByCountry(listings);
            }
        },
        components: {
            ListingSummaryGroup
        },
        beforeRouteEnter(to, from, next) {
            let serverData = JSON.parse(window.vuebnb_server_data);
            if (to.path === serverData.path) {
                let listing_groups = groupByCountry(serverData.listings);
                next(component => component.listing_groups = listing_groups);
            } else {
                axios.get(`/api/`).then(({ data }) => {
                    let listing_groups = groupByCountry(data.listings);
                    next(component => component.listing_groups = listing_groups);
                });

            }
        }
    }
</script>
<style>
    .listing-summary-group {
        padding-bottom: 20px;
    }
    .listing-summaries {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
    }
    .listing-summaries > .listing-summary {
        margin-right: 15px;
    }
    .listing-summaries > .listing-summary:last-child {
        margin-right: 0;
    }
</style>
