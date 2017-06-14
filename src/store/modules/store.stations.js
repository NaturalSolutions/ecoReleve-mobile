import { erdApi } from '../../main.js'


export default {

  state: {
    stations: [],
    current: {},
  },

  getters: {

  },

  mutations: {
    initState(state, payload){
      state.stations = payload
      state.current = null
    },
    addStation( state, payload){
      state.stations.push(payload)
    },

    unsetCurrent(){
      
    },
  },

  actions: {

    scopeStations({ commit, rootState }){
      if(!rootState.projects.current.stations) {
        rootState.projects.current.stations = []
      }
      commit('initState', rootState.projects.current.stations)
    },  

    createStation ({ commit, rootState }) {

      let obs = rootState.observation.current;
      
      let station = {
        timestamp: new Date().getTime(),
        latitude: obs.values.latitude,
        longitude: obs.values.longitude,
        observations: [ obs.timestamp ],
      }

      commit('addStation', station)
    }
  },
}
