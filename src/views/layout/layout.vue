<!--
 * author: the.one
 *
 * time: 2021-07-27
 *
 * desc: layout
 *
-->

<template>
    <div class="t-container">
        <div class="t-header">
            <THeader />
        </div>
        <div class="t-layout">
            <div class="t-layout-swiper">
                <TSwiper />
            </div>
            <div class="t-layout-container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import THeader from '@components/t-header/t-header';
    import TSwiper from '@components/t-swiper/t-swiper';
    export default {
        name: "layout",
        components:{
            THeader,
            TSwiper,
        },
    }
</script>

<style lang="stylus" scoped>
@import "./layout.styl";
</style>
