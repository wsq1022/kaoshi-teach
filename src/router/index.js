import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import center from '@/components/center'
import ti from '@/components/ti'
import selectFangxiang from '@/components/selectFangxiang'
import selectBanji from '@/components/selectBanji'

Vue.use(Router)

var router= new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
      {
          path: '/login',
          component: Login
      },
      {
          path:"/center",
          component: center
      },
      {
          path:"/ti",
          component: ti
      },
      {
          path:"/selectFangxiang",
          component:selectFangxiang
      },
      {
          path:"/selectBanji",
          component:selectBanji
      }
  ]
})

router.beforeEach(function (to,from,next) {
    if(to.path=="/login"){
        if(sessionStorage.teachLogin&&JSON.parse(sessionStorage.teachLogin).message=="yes") {
            next("/");
        }else{
            next();
        }


    }else{
        if(sessionStorage.teachLogin&&JSON.parse(sessionStorage.teachLogin).message=="yes"){
            next();
        }else{
            next("/login");
        }
    }
})

export default router
