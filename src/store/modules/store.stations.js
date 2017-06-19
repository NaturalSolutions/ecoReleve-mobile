import { erdApi } from '../../main.js'
import moment from 'moment'

export default {

  state: {
    stations: [],
    schema: {
      "latitude": {
        "title": "Latitude *",
        type: "Number",
        editable: false,
        "validators": [
          "required"
        ]
      },        
      "longitude": {
        "title": "Longitude *",
        type: "Number",
        editable: false,
        "validators": [
          "required"
        ]
      }, 
      "lieu": {
        "title": "Lieu dit",
        type: "Text",
        editable: true,
      },      
      "name": {
        "title": "Nom",
        type: "Text",
        editable: true,
      },      
      "date": {
        "title": "date",
        type: "Text",
        editable: false,
        "validators": [
          "required"
        ]
      },
      "time": {
        "title": "time",
        type: "Text",
        editable: false,
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
            date: moment().format('DD/MM/YYYY'),
            time: moment().format('H:mm'),
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
