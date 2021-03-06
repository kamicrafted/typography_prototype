import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Preview from './views/Preview.vue'
import Table from './views/Table.vue'

import Web from './views/web/Home.vue'
import WebSports from './views/web/Sports.vue'
import WebMovies from './views/web/Movies.vue'
import WebShows from './views/web/Shows.vue'
import WebGuide from './views/web/Guide.vue'
import WebMyVideos from './views/web/MyVideos.vue'
import WebAccount from './views/web/Account.vue'

import Mobile from './views/mobile/Home.vue'
import MobileSports from './views/mobile/Sports.vue'
import MobileEntertainment from './views/mobile/Entertainment.vue'
import MobileMovies from './views/mobile/Movies.vue'
import MobileGuide from './views/mobile/Guide.vue'
import MobileMyVideos from './views/mobile/MyVideos.vue'
import MobileMyVideosScheduled from './views/mobile/MyVideosScheduled.vue'
import MobileMyVideosContinue from './views/mobile/MyVideosContinue.vue'
import MobileAccount from './views/mobile/Account.vue'

import TV from './views/tv/Home.vue'
import TVSports from './views/tv/Sports.vue'
// import TVMovies from './views/tv/Movies.vue'
// import TVShows from './views/tv/Shows.vue'
// import TVGuide from './views/tv/Guide.vue'
// import TVMyVideos from './views/tv/MyVideos.vue'
// import TVAccount from './views/tv/Account.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },

    {
      path: '/table',
      name: 'table',
      component: Table
    },

    // ==========================================
    // Web Routes
    // ==========================================
    {
      path: '/web/',
      name: 'web',
      component: Web,
      props: { platform: 'web' }
    },
    {
      path: '/web/sports',
      name: 'web-sports',
      component: WebSports,
      props: { platform: 'web' }
    },
    {
      path: '/web/shows',
      name: 'web-shows',
      component: WebShows,
      props: { platform: 'web' }
    },
    {
      path: '/web/movies',
      name: 'web-movies',
      component: WebMovies,
      props: { platform: 'web' }
    },
    {
      path: '/web/guide',
      name: 'web-guide',
      component: WebGuide,
      props: { platform: 'web' }
    },
    {
      path: '/web/myvideos',
      name: 'web-myvideos',
      component: WebMyVideos,
      props: { platform: 'web' }
    },
    {
      path: '/web/account',
      name: 'web-account',
      component: WebAccount,
      props: { platform: 'web' }
    },


    // ==========================================
    // Mobile Routes
    // ==========================================
    {
      path: '/mobile/',
      name: 'mobile',
      component: Mobile,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/sports',
      name: 'mobile-sports',
      component: MobileSports,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/entertainment',
      name: 'mobile-shows',
      component: MobileEntertainment,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/movies',
      name: 'mobile-movies',
      component: MobileMovies,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/guide',
      name: 'mobile-guide',
      component: MobileGuide,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/guide',
      name: 'mobile-networks',
      component: MobileGuide,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/myvideos',
      name: 'mobile-recorded',
      component: MobileMyVideos,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/myvideos/scheduled',
      name: 'mobile-scheduled',
      component: MobileMyVideosScheduled,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/myvideos/continue',
      name: 'mobile-continue',
      component: MobileMyVideosContinue,
      props: { platform: 'mobile' }
    },
    {
      path: '/mobile/account',
      name: 'mobile-account',
      component: MobileAccount,
      props: { platform: 'mobile' }
    },

    // ==========================================
    // TV Routes
    // ==========================================
    {
      path: '/tv/',
      name: 'tv',
      component: TV,
      props: { platform: 'tv' }
    },
    {
      path: '/tv/sports',
      name: 'tv-sports',
      component: TVSports,
      props: { platform: 'tv' }
    },
    // {
    //   path: '/tv/shows',
    //   name: 'tv-shows',
    //   component: TVShows,
    //   props: { platform: 'tv' }
    // },
    // {
    //   path: '/tv/movies',
    //   name: 'tv-movies',
    //   component: TVMovies,
    //   props: { platform: 'tv' }
    // },
    // {
    //   path: '/tv/guide',
    //   name: 'tv-guide',
    //   component: TVGuide,
    //   props: { platform: 'tv' }
    // },
    // {
    //   path: '/tv/myvideos',
    //   name: 'tv-myvideos',
    //   component: TVMyVideos,
    //   props: { platform: 'tv' }
    // },
    // {
    //   path: '/tv/account',
    //   name: 'tv-account',
    //   component: TVAccount,
    //   props: { platform: 'tv' }
    // },
  ]
})
