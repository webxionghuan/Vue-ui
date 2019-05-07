import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入Test组件
import Test from "./components/Test.vue"
import List from "./components/List.vue"
import Login from "./components/tabbar/Login.vue"
import GoodList from "./components/tabbar/GoodList.vue"
import Home from "./components/tabbar/Home.vue"
import NewsList from "./components/home/NewsList.vue"
import Exam01 from "./components/test/Exam01.vue"
import Exam02 from "./components/test/Exam02.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
Vue.use(Router)
//2:为Test组件配置访问路径
export default new Router({
  routes: [
    {path:'/NewsInfo',component:NewsInfo},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/NewsList',component:NewsList},
    {path:'/Home',component:Home},
    {path:'/GoodList',component:GoodList},
    {path:'/Login',component:Login},
    {path:'/',component:HelloContainer},
    {path:'/Test',component:Test},
    {path:'/List',component:List}
  ]
})