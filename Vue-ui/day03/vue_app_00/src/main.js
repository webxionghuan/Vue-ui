import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//1:引入Header组件
import {Header,Button,Swipe,SwipeItem} from "mint-ui"
//2:组件Header组件
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//3:引入axios库
import axios from "axios"
//4:配置跨域访问选项
axios.defaults.withCredentials=true
//5:将axios配置Vue实例属性
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
