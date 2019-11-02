import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import store from './store'
import '../src/assets/style/reset.css'

//引用VueResouce
import VueResource from 'vue-resource'

//引用Axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false
Vue.use(VueResource);
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
// router.push('/home').catch(err=>{});

// router.beforeEach((to,from,next)=>{
//   // alert("请登录！");
//   // next();
//   // console.log(to,from);
//   if(to.path === '/login'){//如果点击登录内容，直接跳转
//     next();
//   }else{
//     alert("请登录！");
//   }
// });

// router.afterEach((to,from)=>{

// })

