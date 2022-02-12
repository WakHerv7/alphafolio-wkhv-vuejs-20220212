import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Folio from '@/components/folio/Index'
// import Folio2 from '@/components/folio-2/Index'
// import Folio3 from '@/components/folio-3/Index'
import FolioSample from '@/components/folio-sample/Index'
import Folio5 from '@/components/folio-5/Index'
import Folio6 from '@/components/folio-6/Index'
import Folio7 from '@/components/folio-7/Index'

import f007 from '@/Pages/Folios/f007/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: f007
      // component: FolioSample
    },
    {
      path: '/f007',
      name: 'oneFolio',
      component: f007
    },
    // ================================
    // ================================
    {
      path: '/folio-5',
      name: 'HelloWorld',
      component: Folio5
    },
    {
      path: '/folio-6',
      name: 'HelloWorld',
      component: Folio6
    },
    {
      path: '/folio-7',
      name: 'HelloWorld',
      component: Folio7
    }
  ]
})
