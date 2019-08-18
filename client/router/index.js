import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Main from '../views/Main.vue'
import NotFound from '../views/NotFound.vue'
import FAQ from '../views/FAQ.vue'


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/faq',
            component: FAQ
        },
        {
            path: '/404',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
