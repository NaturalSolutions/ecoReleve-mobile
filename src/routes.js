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
    path: '/observation/:id/',
    component: require('./assets/vue/pages/observation.vue'),
  },

]