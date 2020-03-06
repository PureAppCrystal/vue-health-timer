import Vue from 'vue'
import VueRouter from 'vue-router'


//import HomePageView from '@/views/HomePageView'

import NotFountPage from '@/views/NotFoundPage'
import MainPageView from '@/views/MainPageView'
import TBTPageView from '@/views/TBTPageView'

Vue.config.devteools = true;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: MainPageView,
    },
    {
        path:'/mode/tbt',
        component: TBTPageView
    },
    // {
    //     path: '/main',
    //     component: MainPageView,
    //     children: [
    //         {
    //             path: 'phonebook',
    //             component: PhoneBookView
    //         },
    //         {
    //             path: 'phonebook/insert',
    //             component: PhoneBookDetail
    //         },
    //         {
    //             path: 'phonebook/select',
    //             component: PhoneBookDetail
    //         },
    //         {
    //             path: 'phonebook/update',
    //             component: PhoneBookDetail
    //         }
    //     ]
    // },
    {
        path: '*',
        component: NotFountPage
    },


]

export const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach( (to, from, next) => {
    // const loginPage = ['/login'];
    // const authRequired = !loginPage.includes(to.path);
    // const userInfo = sessionStorage.getItem('user');

    // if (authRequired && !userInfo) {
    //     return next('/login');
    // }

    // if (userInfo && loginPage.includes(to.path)) {
    //     if ( from.path==='/' ) {
    //         return next('/main')
    //     }
    //     return next(from.fullPath);
    // }

    next();
})