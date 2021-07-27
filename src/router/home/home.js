/*
* author: the.one
*
* time: 2021-07-27
*
* desc: 首页路由
*
* */


// 首页
const Home = (r) => require.ensure([], () => r(require('@views/home/home.vue')), 'Home');


export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
];
