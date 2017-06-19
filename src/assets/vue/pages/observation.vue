<template>

<f7-page name="observation" with-subnavbar tabs>
  <f7-navbar back-link="Back" :title="protocol.name" sliding>
    <f7-nav-right>
      <f7-link icon="icon-bars" open-panel="left"></f7-link>
    </f7-nav-right>
    <f7-subnavbar sliding :slot="$theme.material ? 'after-inner' : 'default'">
      <f7-buttons>
        <f7-button tab-link="#obsTab1" active>Tracé</f7-button>
        <f7-button tab-link="#obsTab2">Obligatoire</f7-button>
        <f7-button tab-link="#obsTab3">Facultatif</f7-button>
      </f7-buttons>
    </f7-subnavbar>
  </f7-navbar>

  <f7-tabs>
  
    <f7-tab id="obsTab1" active>
      <div id="obsMap"></div>

      <f7-list form>
        <f7-list-item ref="fields" v-for="(field, key) in stationFields" v-bind:key="field.name">

          <custom-input v-if="field.type === 'Text'" entity="station" :disabled="disabled" :name=key :param=field>
          </custom-input>

          <custom-select v-if="field.type === 'Select'" entity="station" :disabled="disabled" :name=key :param=field>
          </custom-select>

          <custom-number v-if="field.type === 'Number'" entity="station" :disabled="disabled" :name=key :param=field>
          </custom-number>

        </f7-list-item>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" fill @click="next">Next</f7-button>
      </f7-toolbar>

    </f7-tab>


    <f7-tab id="obsTab2">
      <f7-list form>
        <f7-list-item ref="fields" v-for="(field, key) in requiredFields" v-bind:key="field.name">

          <custom-input v-if="field.type === 'Text'" entity="obs" :disabled="disabled" :name=field.name :param=field>
          </custom-input>

          <custom-select v-if="field.type === 'Select'" entity="obs" :disabled="disabled" :name=field.name :param=field>
          </custom-select>

          <custom-number v-if="field.type === 'Number'" entity="obs" :disabled="disabled" :name=field.name :param=field>
          </custom-number>

        </f7-list-item>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" @click="finish">Finish</f7-button>
      </f7-toolbar>
    </f7-tab>


    <f7-tab id="obsTab3">
      <f7-list form>
        <f7-list-item ref="fields" v-for="(field, key) in optionalFields">
          <custom-input v-if="field.type === 'Text'" entity="obs" :disabled="disabled" :name=field.name :param=field>
          </custom-input>

          <custom-select v-if="field.type === 'Select'" entity="obs" :disabled="disabled" :name=field.name :param=field>
          </custom-select>

          <custom-number v-if="field.type === 'Number'" entity="obs" :disabled="disabled" :name=field.name :param=field>
        </custom-number>

        </f7-list-item>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" @click="finish">Finish</f7-button>
      </f7-toolbar>
    </f7-tab>


  </f7-tabs>
  <f7-fab-speed-dial>
    <f7-fab-actions>
      <f7-fab-action color="pink" @click="onActionClick">A</f7-fab-action>
      <f7-fab-action color="orange" @click="onActionClick">B</f7-fab-action>
      <f7-fab-action color="green" @click="onActionClick">C</f7-fab-action>
    </f7-fab-actions>
    <f7-fab>
      <f7-icon icon="icon-plus"></f7-icon>
      <f7-icon icon="icon-close"></f7-icon>
    </f7-fab>
  </f7-fab-speed-dial>
</f7-page>

</template>

<script>
import CustomInput from './../input.vue'
import CustomSelect from './../input.select.vue'
import CustomNumber from './../input.number.vue'
import _ from 'lodash'
export default {

  //'cause we can't bind vuex with dynamic v-models
  beforeCreate () {
    this.$store.commit('setCurrentProject', this.$route.params);
    this.$store.dispatch('setCurrentObservation', this.$route.params);
    this.$store.dispatch('setCurrentStation');
  },

  computed: {
    stationFields() {
      return this.$store.state.stations.schema;
    },
    protocol() {
      return this.$store.state.protocols.current;
    },
    requiredFields() {
      let requierds = [];
      let schema = this.$store.state.protocols.current.schema;
      for(let key in schema){
        if(schema[key]['validators']){
          if(schema[key]['validators'][0] === 'required'){
            requierds.push(schema[key])
          }
        }
      }
      return requierds
    },
    optionalFields() {
      let optionals = [];
      let schema = this.$store.state.protocols.current.schema;
      for(let key in schema){
        if(schema[key]['validators']){
          if(schema[key]['validators'][0] !== 'required'){
            optionals.push(schema[key])
          }
        } else {
          optionals.push(schema[key])
        }
      }
      return optionals
    },
    currentProject() {
      return this.$store.state.projects.current;
    },

    currentStation() {
      return this.$store.state.stations.current;
    },
    disabled() {
      if(this.$store.state.observation.current.status == 'finished'){
        return true;
      }
      return false;
    },

    coords() {
      
    },
  },

  components: {
    'custom-input': CustomInput,
    'custom-select': CustomSelect,
    'custom-number': CustomNumber
  },


  mounted(){

    let _this = this;

    if(this.map)
      return;

    this.map = L.map('obsMap').setView([45, 0], 5);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    let m;

    if(this.currentStation.values.latitude && this.currentStation.values.longitude){
      let m = this.addMarker([this.currentStation.values.latitude, this.currentStation.values.longitude])
      this.map.panTo(m._latlng);
    } else {
      this.geoloc()
    }

    if(!this.disabled){
      this.map.on('click', function(e){
        _this.$store.commit('setCoordinates', e.latlng)
        _this.addMarker(e.latlng)
      });
    }
  },

  methods: {

    addMarker(coords){
      let m;
      
      let icon = L.divIcon({ 
          iconSize: new L.Point(10, 10), 
          className: 'custom-marker'
      });

      m = L.marker(coords, { icon: icon })
      m.addTo(this.map)

      if(this.currentMarker)
        this.map.removeLayer(this.currentMarker);
      this.currentMarker = m;
      
      return m;
    },

    geoloc(){
      let _this = this
      if (navigator.geolocation)
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      else {
      }
          
      function successCallback(position){
        let tmp = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,

        }
        _this.$store.commit('setCoordinates', tmp)
        _this.addMarker([position.coords.latitude, position.coords.longitude])
      };  

      function errorCallback(error){
        console.log('geoloc problem');
      };
    },

    formHasErrors(){
      let hasError = false

      if(!this.$refs.fields)
        return false

      for (var i = 0; i < this.$refs.fields.length; i++) {
        let field = this.$refs.fields[i].$children[0].$children[0]
        if(field.hasError === true){
          hasError = true
        }
      }
      
      return hasError;
    },


    finish(){
      if(!this.formHasErrors()){

        this.$store.commit('setCurrentObservationStatus', 'finished')
        this.$store.commit('setCurrentStationStatus', 'finished')

        this.$f7.mainView.router.load({url: '/projects/' + this.currentProject.ID, force: true})
      } else {
        console.log('errors on form');
        //notification that there is errors
      }

    },

    next(){
      //requires quick fix
      this.$f7.showTab('#obsTab2', '#obsTab2', false, true)
    },

    onActionClick(e){
      console.log(e);
    },

  }
}
</script>

<style>
  #obsMap{
    height: 300px;
    width: 100%;
  }
</style>