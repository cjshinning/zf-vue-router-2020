import Vue from 'vue';
import VueRouter from '../vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// use 方法会调用install方法 会全局注册组件 router-link router-view
Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'a',
        component: {
          render: h => <h2>about a</h2>
        }
      },
      {
        path: 'b',
        component: {
          render: h => <h2>about b</h2>
        }
      }
    ]
  }
]

export default new VueRouter({
  routes
})
