import Vue from 'vue'
import App from './App.vue'
import router from './router/index';

Vue.config.productionTip = false

new Vue({
  name: 'root',
  render: h => h(App),
  router  //这里让所有的子组件都可以获取到router属性，而不是所有实例，所以没把它放在原型上
}).$mount('#app')

// 前端路由常见的两个方案 hash模式 #aa ##bb （丑）
// window.location.hash = '/about'
// window.onhashchange = function () { } 渲染对应路径的组件

// history模式
// window.history.pushState({},null,'aa') 实现增添路由 但是强制刷新还是有问题（服务端来解决这个问题）
// window.onpopstate = function () { } 监控浏览器路径的变化

// （浏览器的历史记录） 栈形结构
// 内部 通过两个栈来实现的 后进的先出（存放历史）