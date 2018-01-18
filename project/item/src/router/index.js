import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Campaigns from '@/components/Campaigns'
import Flows from '@/components/Flows'
import CampaignsDetail from '@/components/Campaigns-Detail'
import Offer from '@/components/Offer'
import OfferDetail from '@/components/Offer-Detail'
import SelectRange from '@/components/SelectRange'
import LoginInfo from '@/components/LoginInfo'
import LoginIn from '@/components/LoginIn'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginIn',
      component: LoginIn
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
   {
      path: '/Campaigns',
      name: 'Campaigns',
      component: Campaigns
    },
    {
      path: '/CampaignsDetail',
      name: 'CampaignsDetail',
      component: CampaignsDetail
    },
    {
      path: '/Flows',
      name: 'Flows',
      component: Flows
    },
    {
      path: '/Offer',
      name: 'Offer',
      component: Offer
    },
    {
      path: '/OfferDetail',
      name: 'OfferDetail',
      component: OfferDetail
    },
    {
      path: '/SelectRange',
      name: 'SelectRange',
      component: SelectRange
    },
    {
      path: '/Account',
      name: 'LoginInfo',
      component: LoginInfo
    },
    
  ]
})
