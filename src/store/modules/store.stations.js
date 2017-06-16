import { erdApi } from '../../main.js'


export default {

  state: {
    stations: [],
    schema: {
      "latitude": {
        "title": "latitude *",
        label: "latitude",
        type: "Number",
        disabled: true,
        "validators": [
          "required"
        ]
      },        
      "longitude": {
        "title": "longitude *",
        label: "longitude",
        type: "Number",
        disabled: true,
        "validators": [
          "required"
        ]
      }, 
      "date": {
        "title": "date",
        label: "date",
        type: "Text",
        disabled: true,
        "validators": [
          "required"
        ]
      },
    },
    current: {},
  },

  getters: {
    finishedStations: state => {
      console.log(state.stations.filter);
      return state.stations.filter(station => station.status === 'finished')
    }
  },

  mutations: {

    setCurrentStation(state, payload){
      state.current = payload
    },
    
    addStation(state, payload){
      state.stations.push(payload)
    },

    setCoordinates (state, payload) {
      state.current.values.latitude = payload.lat;
      state.current.values.longitude = payload.lng;
    },

    updateStationValue (state, payload) {
      state.current.values[payload.key] = payload.value;
    },

    setCurrentStationStatus(state, payload) {
      state.current.status = 'finished';
    }
  },

  actions: {

    setCurrentStation ({ commit, rootState }) {
      let station
      let obs = rootState.observation.current;

      if(obs.stationId){
        //search in stations
        station = rootState.stations.stations.find((station) => {
          return obs.stationId === station.timestamp
        });
      } else {
        //find by coordinates

        //or init new station
        station = {
          values: {
            date: new Date(),
            latitude: '',
            longitude: '',
          },
          timestamp: new Date().getTime(),
          observations: [obs.timestamp],
        }
        commit('setStationId', station.timestamp)
        commit('addStation', station)
      }

      commit('setCurrentStation', station)
    }
  },
}
