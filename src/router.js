import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import Register from './views/register.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/profile.vue')
        },
        {
            path: '/studentProfile/:id',
            name: 'studentProfile',
            component: () => import('./views/studentProfile.vue')
        },
        {
            path: '/changeStudentProfile/:id',
            name: 'changeStudentProfile',
            component: () => import('./views/changeStudentProfile.vue')
        },
        {
            path: '/companyProfile/:id',
            name: 'companyProfile',
            component: () => import('./views/companyProfile.vue')
        },
        {
            path: '/changeCompanyProfile',
            name: 'changeCompanyProfile',
            component: () => import('./views/changeCompanyProfile.vue')
        },
        {
            path: '/teacherProfile',
            name: 'teacher Profile',
            component: () => import('./views/teacherProfile.vue')
        },
        {
            path: '/changeTeacherProfile',
            name: 'changeTeacherProfile',
            component: () => import('./views/changeTeacherProfile.vue')
        },
        {
            path: '/resume/:id',
            name: 'resume',
            component: () => import('./views/resume')
        }
    ]
});