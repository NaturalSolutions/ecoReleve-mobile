export default [

  {
    path: '/projects/',
    component: require('./assets/vue/pages/projects.vue'),
  },

  {
    path: '/projects/:id/',
    component: require('./assets/vue/pages/project.vue'),
  },

  {
    path: '/protocols/',
    component: require('./assets/vue/pages/protocols.vue'),
  },

  {
    path: '/projects/:id/observations/:timestamp/',
    component: require('./assets/vue/pages/observation.vue'),
  },

  {
    path: '/projects/:id/stations/:timestamp/',
    component: require('./assets/vue/pages/station.vue'),
  },

]