/*
* author: the.one
*
* time: 2021-07-27
*
* desc: 路由
*
* */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMeta } from '@config/router';

import Home from './home/home';


const Layout = r => require.ensure([], () => r(require('@views/layout/layout.vue')), 'Layout');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    name: 'layout',
    redirect: '/',
    children: [
        ...Home,
    ]
  },
  {
    path: '/',
    redirect: '/',
  },
  {
    path: '*',
    name: '404',
    redirect: '/',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => routerMeta(to, from, next));

export default router;
