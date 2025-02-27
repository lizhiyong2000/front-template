import type { RouteRecordRaw } from "vue-router";

import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import List from '../views/List.vue'
// import Detail from '../views/Detail.vue'



const routes:Array<RouteRecordRaw> = [
  {
    path:'/home',
    name: 'Home',
    component:Home
  },
  // {
  //   path:'/about',
  //   component:About
  // },
  // {
  //   path:'/list',
  //   component:List
  // },
  // {
  //   path:'/detail',
  //   component:Detail
  // },
  {
    path:'/',
    redirect:'/home'
  }
]


export default routes