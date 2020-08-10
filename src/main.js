import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios"

Vue.config.productionTip = false;
Vue.use(ElementUi, {
  size: 'mini'
})

Vue.prototype.$axios = axios
// axios.defaults.baseURL = ""

// router.beforeEach((to, from, next) => {

//   if (to.path != "/login") {
//     // 请求后端数据
//     axios.get('/api/getMenu').then(res=>{
//       console.log(res.data.list);
//     })
//     next()
//   } else {
//     next()
//   }
// })



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");