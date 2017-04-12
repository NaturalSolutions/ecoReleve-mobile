export default [

  {
    path: '/project/:id/',
    component: require('./assets/vue/pages/project.vue'),
    tabs: [
      {
        path: '/',
        tabId: 'observations',
        component: require('./assets/vue/pages/project/observations.vue')
      },
      {
        path: '/stations/',
        tabId: 'stations',
        component: require('./assets/vue/pages/project/stations.vue')
      }
    ]
  },  

  {
    path: '/observation/:id/',
    component: require('./assets/vue/pages/observation.vue'),
  },

  {
    path: '/projects/',
    component: require('./assets/vue/pages/projects.vue'),
    tabs: [
      {
        path: '/',
        tabId: 'myProjects',
        component: require('./assets/vue/pages/projects/my.projects.vue')
      },
      {
        path: '/all/',
        tabId: 'allProjects',
        component: require('./assets/vue/pages/projects/all.projects.vue')
      }
    ], childrens: [
    ]                                
  },

]