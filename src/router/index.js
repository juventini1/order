import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')

Vue.use(VueRouter)
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router