import { createRouter,createMemoryHistory,Router } from "vue-router";

const routers = [
    {
        name:'index',
        path:'/T1',
        component: () => import('@/views/index.vue')
    }
    // {
    //     name:'index',
    //     path:'/t1',
    //     component: ()=> import('@/views/HelloWorld.vue')
    // }
]

const router:Router = createRouter({
    history:createMemoryHistory(),
    routes:routers
});
 
export default router;