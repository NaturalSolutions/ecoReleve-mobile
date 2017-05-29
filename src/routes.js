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
    path: '/observation/:timestamp/',
    component: require('./assets/vue/pages/observation.vue'),
  },

]