import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//取消点击的300ms的延迟
FastClick.attach(document.body)
    //使用图片懒加载
Vue.use(VueLazyLoad)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')