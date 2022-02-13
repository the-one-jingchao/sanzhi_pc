<!--
 * author: the.one
 *
 * time: 2021-07-27
 *
 * desc: 公用header
 *
-->
<template>
    <div class="t-header-section">

        <span class="text">北京三智在线科技有限公司</span>

        <span @click="openLink" class="t-scratch">
          <i class="iconfont icon-ruanjianxiazai-ruanjianliebiao"></i>
          Scratch
        </span>

    </div>
</template>

<script>
    export default {
        name: "t-header",
        methods:{
            openLink(){
                window.open('https://scratchlesson.com/download', '_blank');
            },
        }
    }
</script>

<style lang="stylus" scoped>
@import "./t-header.styl"
</style>
