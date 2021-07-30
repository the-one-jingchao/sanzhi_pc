<template>
<!--    <el-carousel :interval="options.interval * 1000" :type="options.type" :height="`${options.height}px`">-->
    <el-carousel :interval="4000" height="600px">
<!--        <el-carousel-item v-for="(item, idx) in list" :key="idx">-->
<!--            <img class="img" :src="item.src" alt="">-->3
<!--        </el-carousel-item>-->
        <el-carousel-item >
            <img class="img" src="./images/7.JPG" alt="">
        </el-carousel-item>
        <el-carousel-item >
            <img class="img" src="./images/9.JPG" alt="">
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
        data(){
            return{
                list: [
                    {
                        src: ('./images/7.JPG'),
                    },
                    {
                        src: ('./images/9.JPG'),
                    }
                ],
            }
        },
        mounted() {
            // this.list = [
            //     {
            //         src: require('./images/7.JPG'),
            //     },
            //     {
            //         src: require('./images/9.JPG'),
            //     }
            // ]
        }
    }
</script>

<style lang="stylus" scoped>
@import "./t-swiper.styl";
</style>
