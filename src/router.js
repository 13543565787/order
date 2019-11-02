import Vue from 'vue'
import Router from 'vue-router'

//引入一级路由组件
import Home from './components/Home'
import Manage from './components/Manage'
import Order from './components/Order'

//菜单
import Menu from './components/Menu'

// import FoodMenu from './components/FoodMenu'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
//引入二级路由组件
import Join from './components/about/Join'
import Intro from './components/about/Intro'
import Contact from './components/about/Contact'
//引入三级路由组件
import WeChat from './components/about/contact/WeChat'
import QQ from './components/about/contact/QQ'
import Email from './components/about/contact/Email'



Vue.use(Router)//使用以下路由组件

export default new Router({
  linkActiveClass:'active',
  mode:'history',
  routes: [
    {path:'/home',component:Home},
    //路由独享守卫
    {path:'/manage',
    component:Manage,
    // beforeEnter(to,from,next){
    //   alert("非登录状态无法点开，请登录");
    //   next('/login');
    // },
    },

    {path:'/order',component:Order},

    //菜单
    // {path:'/foodMenu',component:FoodMenu},
    {path:'/Menu',component:Menu},


    {path:'/login',component:Login},
    {path:'/register',component:Register},
    //配置二级路由
    {path:'/about',component:About,
    redirect:'/about/intro',//进入二级路由时的默认选项
    children:[
      {path:'join',component:Join},
      {path:'intro',component:Intro},
      //配置三级路由
      {path:'contact',component:Contact,
      redirect:'/about/contact/wechat',//进入二级路由时的默认选项      
      children:[
        {path:'wechat',component:WeChat},
        {path:'qq',component:QQ},
        {path:'email',component:Email},
      ]},
    ]},
    {path:"*",redirect:'/home'},
  ]
})
