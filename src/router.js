import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Web from './views/web/Home.vue'
import WebSports from './views/web/Sports.vue'
import WebMovies from './views/web/Movies.vue'
import WebShows from './views/web/Shows.vue'
import WebMyVideos from './views/web/MyVideos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/web/',
      name: 'web',
      component: Web
    },
    {
      path: '/web/sports',
      name: 'web-sports',
      component: WebSports
    },
    {
      path: '/web/shows',
      name: 'web-shows',
      component: WebShows
    },
    {
      path: '/web/movies',
      name: 'web-movies',
      component: WebMovies
    },
    // {
    //   path: '/web/guide',
    //   name: 'web-guide',
    //   component: WebGuide
    // },
    {
      path: '/web/myvideos',
      name: 'web-myvideos',
      component: WebMyVideos
    }
  ]
})
