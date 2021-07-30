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
        <div class="t-section">
            <div class="t-title">三智四大服务</div>
            <div class="t-serve">
                <div v-for="item in serve" :key="item.title" class="t-s-card">
                    <div class="t-s-img"><img :src="item.src" alt=""></div>
                    <div class="t-s-title">{{item.title}}</div>
                    <div class="t-s-desc">{{item.desc}}</div>
                </div>
            </div>
        </div>
        <div class="t-section bg3">
            <div class="t-title">关于我们</div>
            <div class="t-us">
                <div class="t-us-f f2">
                    <div class="t-us-label">构建孩子驾驭未来的思维能力 <span class="line"></span></div>
                    <div class="t-us-label">
                        三智在线，由资深IT教育专家创立，获得赛伯乐合伙人、多融创投及涌铧投资(涌金集团直属投资机构)的雄厚资本支持。引进欧美先进教育理念和课程平台，致力于成为卓越的青少年科技教育机构。小码王立足于少儿编程培训，给孩子一个新的思考方式，让儿童与世界同步！
                        <span class="line"></span>
                    </div>
                    <div class="t-us-label">
                        成立至今，已有八十余家旗舰校区覆盖北京、上海、杭州、广州、深圳等全国十多个重点城市。整合全国优秀的编程教育专家、研究者和实践专家，提供孩子综合素质和学习能力培养的解决方案，让少年掌握人工智能时代必备编程技能，成就不一样的未来。
                        <span class="line"></span>
                    </div>
                </div>
                <div class="t-us-f">
                    <div class="l-us-title">北京三智在线科技有限公司</div>
                    <div class="l-us-tel">地址：北京市大兴区大东工业园</div>
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
                },
                serve: [
                    {
                        src: require('./images/promise01.png'),
                        title: '教学',
                        desc: '为孩子量身制定学习计划，8-12人小班制教学'
                    },
                    {
                        src: require('./images/promise02.png'),
                        title: '师资',
                        desc: '师资团队教学经验丰富'
                    },
                    {
                        src: require('./images/promise03.png'),
                        title: '服务',
                        desc: '定期反馈孩子学习进度，让家长更有效的了解情况'
                    },
                    {
                        src: require('./images/promise04.png'),
                        title: '退款',
                        desc: '学习不满意可申请退款'
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "./home.styl"
</style>
