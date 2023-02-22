import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/', component: import('./components/layout/main'),
        name: 'MainLayout',
        children: [
            {
                path: '/login', component: import('./components/page/Login'),
                name: 'login'
            },
            {
                path: 'users', component: import('./components/page/Users'),
                name: 'users'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
