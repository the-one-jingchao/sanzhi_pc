<template>
<!--    <el-carousel :interval="options.interval * 1000" :type="options.type" :height="`${options.height}px`">-->
    <el-carousel :interval="4000" height="600px">
        <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "t-swiper",
        // props: ['options'],
        // watch:{
        //     options: {
        //         handler:(val) => {
        //             console.log(val)
        //             console.log(this.options)
        //             this.options = val;
        //         },
        //         deep: true,
        //         immediate: true,
        //     }
        // },
        mounted() {

        }
    }
</script>

<style lang="stylus" scoped>
@import "./t-swiper.styl";
</style>
