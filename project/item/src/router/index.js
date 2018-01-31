import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Campaigns from '@/components/Campaigns'
import CampaignsDetail from '@/components/Campaigns-Detail'
import Flows from '@/components/Flows'
import FlowDetail from '@/components/Flow-Detail'
import Offer from '@/components/Offer'
import OfferDetail from '@/components/Offer-Detail'
import Offers from '@/components/Offers'
import SelectRange from '@/components/SelectRange'
import LoginInfo from '@/components/LoginInfo'
import LoginIn from '@/components/LoginIn'
import Lander from '@/components/Lander'
import LanderDetail from '@/components/Lander-Detail'
import TrafficSource from '@/components/TrafficSource'
import TrafficSourceDetail from '@/components/TrafficSource-Detail'
import AffiliateNetwork from '@/components/Affiliate'
import AffiliateNetworkDetail from '@/components/Affiliate-Detail'
import Detail from '@/components/Detail'

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
      path: '/FlowDetail',
      name: 'FlowDetail',
      component: FlowDetail
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
      path: '/LanderDetail',
      name: 'LanderDetail',
      component: LanderDetail
    },
    {
      path: '/TrafficSource',
      name: 'TrafficSource',
      component: TrafficSource
    },
    {
      path: '/TrafficSourceDetail',
      name: 'TrafficSourceDetail',
      component: TrafficSourceDetail
    },
    {
      path: '/AffiliateNetwork',
      name: 'AffiliateNetwork',
      component: AffiliateNetwork
    },
    {
      path: '/AffiliateNetworkDetail',
      name: 'AffiliateNetworkDetail',
      component: AffiliateNetworkDetail
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
