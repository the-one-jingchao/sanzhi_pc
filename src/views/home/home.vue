<!--
 * author: the.one
 *
 * time: 2021-07-27
 *
 * desc: home
 *
-->
<template>
    <div class="t-home">
        <div class="t-section">
            <div class="t-title">选择三智编程</div>
            <div class="t-desc">三智编程从容易入门的图形化编程语言入手，培养孩子的编程兴趣 <br> 逐渐全面提升学生的抽象思维和算法建模能力</div>
            <div class="t-flex">
                <div v-for="item in descList" :key="item.title" class="t-f1">
                    <div class="t-f1-img">
                        <img :src="item.src" />
                    </div>
                    <div class="t-f1-title">{{item.title}}</div>
                    <div class="t-f1-desc">{{item.desc}}</div>
                </div>
            </div>
        </div>
        <div class="t-section bg1">
            <div class="t-title">完善科学的进阶体系</div>
            <div class="t-desc">参考CSTA对应的能力模型，专业老师在线辅导点评</div>
            <div class="t-table">
                <div class="t-head">
                    <div
                            :class="{
                                first: idx === 0,
                                end: idx === cstaTable.head.length - 1,
                                w350: idx === cstaTable.head.length - 1,
                                w300: idx === cstaTable.head.length - 2,
                                w150:  idx === 1 || idx === 2,
                            }"
                            v-for="(item, idx) in cstaTable.head"
                            :key="item"
                            class="t-head-cont">{{item}}</div>
                </div>
                <div
                        class="t-body"
                        v-for="(item, idx) in cstaTable.cont"
                        :class="{bg: idx % 2 !== 0}"
                        :key="item.type"
                >
                    <div class="t-body-cont first"><div class="block"  v-html="item.type">{{item.type}}</div></div>
                    <div class="t-body-cont w150" ><div class="block" v-html="item.age">{{item.age}}</div></div>
                    <div class="t-body-cont w150" ><div class="block" v-html="item.time">{{item.time}}</div></div>
                    <div class="t-body-cont w300"><div class="block"  v-html="item.desc">{{item.desc}}</div></div>
                    <div class="t-body-cont w350 end"><div class="block"  v-html="item.get">{{item.get}}</div></div>
                </div>
            </div>
        </div>
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
                src2: require('./images/selected_icon1.png'),
                descList: [
                    {
                        src: require('./images/selected_icon1.png'),
                        title: '参考CSTA对应的能力模型',
                        desc: '十级进阶教学体系',
                    },
                    {
                        src: require('./images/selected_icon2.png'),
                        title: '优秀教研保证',
                        desc: '核心教研团队来自985、211院校',
                    },
                    {
                        src: require('./images/selected_icon3.png'),
                        title: '定制化教学模式',
                        desc: '剧情闯关式学习',
                    },
                    {
                        src: require('./images/selected_icon4.png'),
                        title: '实时追踪反馈',
                        desc: '真人持续跟进',
                    }
                ],
                cstaTable: {
                    head: ['教学类型', '建议学龄', '学习周期', '教学介绍', '能力收获'],
                    cont: [
                        {
                            type: '少儿图形化编程 <br> L1-3',
                            age: '小学',
                            time: '1-2年',
                            desc: '闯关学习配上深入浅出的讲解，设计图形化程序的同时养成缜密细心的逻辑思维和自主学习的好习惯',
                            get: '掌握编程三大逻辑结构 <br> 将数理问题抽象为程序逻辑 <br> 主动学习、纠错与复盘能力 <br> 专注力、洞察力、缜密的逻辑思维',
                        },
                        {
                            type: 'Python <br> L4-5',
                            age: '小学高年级 <br> 中学',
                            time: '2-3年',
                            desc: '人工智能、数据分析、算法演算，Python已成为当下热门的编程语言',
                            get: '培养算法思维和代码编写能力 <br> 应用计算思维解决问题 <br> 人工智能开发与应用 <br>  数据处理与分析',
                        },
                        {
                            type: 'C++ <br> L6-10',
                            age: '小学高年级 <br> 中学',
                            time: '3年+',
                            desc: '集中攻克信息学竞赛核心算法，硬核又充满挑战的C++奥赛内容',
                            get: '信息奥赛重难点攻破 <br> 培养进阶数学思维 <br> 集中训练高级程序算法 <br>  应用算法拆分解决数理问题',
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "./home.styl"
</style>
