import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import New1 from './views/New1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
     {
      path: '/new1',
      name: 'new1',
      component: New1
    }
  ]
})
