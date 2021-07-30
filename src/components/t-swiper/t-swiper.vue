<template>
<!--    <el-carousel :interval="options.interval * 1000" :type="options.type" :height="`${options.height}px`">-->
    <el-carousel :interval="2000" height="600px">
       <el-carousel-item v-for="(item, idx) in list" :key="idx">
           <img class="img" :src="item.src"
                onselectstart="return false;"
                oncontextmenu="return false;"
                alt="">
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
                        src: require('./images/s1.jpeg'),
                    },
                    {
                        src: require('./images/s2.jpeg'),
                    },
                    {
                        src: require('./images/s3.jpeg'),
                    },
                    {
                        src: require('./images/s4.jpeg'),
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
