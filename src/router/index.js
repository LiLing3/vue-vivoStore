import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vivoHome from '@/views/home/home.vue'
import vivoMorseckill from '@/views/morSeckill/morSeckill'
import vivoDetailpage from '@/views/detailPages/detailPage.vue'
import test from '@/views/test/test.vue'
import testScoped from '@/views/test/testScoped.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: vivoHome
    },
    {
      path: '/morseckill',
      name: 'morseckill',
      component: vivoMorseckill
    },
    {
      path:'/detailPage',
      name:'detail',
      component:vivoDetailpage
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/testScoped',
      name:'testScoped',
      component:testScoped
    },
    
  ]
})
