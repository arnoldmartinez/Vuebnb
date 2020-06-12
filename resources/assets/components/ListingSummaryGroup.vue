<template>
    <div class="listing-summary-group">
        <h1>Places in {{ country }}</h1>
        <div class="listing-carousel">
            <div class="controls">
                <carousel-control dir="left"></carousel-control>
                <carousel-control dir="right"></carousel-control>
            </div>
            <div class="listing-summaries-wrapper">
                <div class="listing-summaries" :style="style">
                    <listing-summary v-for="listing in listings" :listing="listing" :key="listing.id"></listing-summary>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ListingSummary from './ListingSummary.vue';
    import CarouselControl from './CarouselControl.vue';

    export default {
        props: ['country', 'listings'],
        computed: {
            style() {
                return { transform: `translateX(-365px)` }
            }
        },
        components: {
            ListingSummary,
            CarouselControl
        }
    }
</script>
<style>
    .listing-summary-group {
        padding-bottom: 20px;
    }
    .listing-summaries-wrapper {
        overflow: hidden;
    }
    .listing-summaries {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        transition: transform 0.5s;
    }
    .listing-summaries > .listing-summary {
        margin-right: 15px;
    }
    .listing-summaries > .listing-summary:last-child {
        margin-right: 0;
    }
    .listing-carousel {
        position: relative;
    }
    .listing-carousel .controls {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: calc(50% - 45px);
        left: -45px;
        width: calc(100% + 90px);
    }
    .listing-carousel .controls .carousel-control {
        color: #c5c5c5;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>
