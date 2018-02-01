import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Campaigns from '@/components/Campaigns'
import CampaignsDetail from '@/components/Campaigns-Detail'
import Flows from '@/components/Flows'
import Offer from '@/components/Offer'
import OfferDetail from '@/components/Offer-Detail'
import Offers from '@/components/Offers'
import SelectRange from '@/components/SelectRange'
import LoginInfo from '@/components/LoginInfo'
import LoginIn from '@/components/LoginIn'
import Lander from '@/components/Lander'
import TrafficSource from '@/components/TrafficSource'
import AffiliateNetwork from '@/components/Affiliate'
import Detail from '@/components/Detail'
import Conversion from '@/components/Conversion'

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
      path: '/Offers',
      name: 'Offers',
      component: Offers
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
    {
      path: '/Lander',
      name: 'Lander',
      component: Lander
    },
    {
      path: '/TrafficSource',
      name: 'TrafficSource',
      component: TrafficSource
    },
    {
      path: '/AffiliateNetwork',
      name: 'AffiliateNetwork',
      component: AffiliateNetwork
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Conversion',
      name: 'Conversion',
      component: Conversion
    },
  ]
})
