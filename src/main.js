// Import Vue
import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'





// Import F7 iOS Theme Styles
// import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
 // OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 

// Import App Custom Styles
import AppStyles from './assets/static/sass/main.scss'
import LeafletStyles from '../node_modules/leaflet/dist/leaflet.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app.vue'

import VueParams from 'vue-params'
import VueI18Next from 'vue-i18next'
import i18next from 'i18next'


import store from './store/store'



Vue.use(Framework7Vue);
Vue.use(VueParams);
Vue.use(VueI18Next);

let resources = {
  en: {
    translation: {
      "hello": "Hello world !",
      "help": "Here is Help page"
    }
  }

  
};



Vue.params.i18nextLanguage = "fr"
i18next.init({ lng: Vue.params.i18nextLanguage, resources })


var ecoreleve = ecoreleve || {};
ecoreleve.app = new Vue({
	store,
	el: '#app',
	template: '<app/>',
	framework7: {
		init: true,//Async init doesn't work with deep link
		root: '#app',
		routes: Routes,
		material: true,
		pushState: true,
		pushStateSeparator: '#',
		swipePanel: 'left',
		swipePanelOnlyClose: true,
		preroute: function (view, options) {
			console.log(store);
		   return true;
		}
	},
	components: {
		app: App
	}
})