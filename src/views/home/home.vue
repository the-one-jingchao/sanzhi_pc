<!--
 * author: the.one
 *
 * time: 2021-07-27
 *
 * desc: home
 *
-->
<template>
    <div>
        home

        asdasdaasdasda
    </div>
</template>

<script>
    // import TSwiper from '@components/t-swiper/t-swiper';
    export default {
        name: "home",
        components:{
            // TSwiper,
        },
        data(){
            return{
                swiperOptions: {
                    type: 'card',
                    height: 400,
                    interval: 4,
                    list: [
                        1
                    ],
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "./home.styl"
</style>
