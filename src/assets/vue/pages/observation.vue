<template>

<f7-page name="observation" with-subnavbar tabs no-swipeback>
  <f7-navbar back-link="Back" title="Observation" sliding>
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
        <f7-list-item ref="fields" v-for="(field, index) in trace" v-bind:key="field.name">

          <custom-input v-if="field.type === 'text'" :param=field>
          </custom-input>

          <custom-select v-if="field.type === 'select'" :param=field>
          </custom-select>

          <custom-number v-if="field.type === 'number'" :param=field>
          </custom-number>


        </f7-list-item>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" fill @click="next">Next</f7-button>
      </f7-toolbar>

    </f7-tab>





    <f7-tab id="obsTab2">
      <f7-list form>
        <f7-list-item v-for="(field, index) in required" v-bind:key="field.name">
          <custom-input :param=field>
          </custom-input>
        </f7-list-item>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" @click="finish">Finish</f7-button>
      </f7-toolbar>
    </f7-tab>






    <f7-tab id="obsTab3">
      <f7-list form>
        <f7-list-item v-for="(field, index) in optional" v-bind:key="field.name">
          <custom-input v-if="field.type === 'number'" :param=field>
          </custom-input>
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
  },

  computed: {
    trace() {
      return this.$store.state.protocols.current.trace;
    },    
    required() {
      return this.$store.state.protocols.current.required;
    },
    optional() {
      return this.$store.state.protocols.current.optional;
    },
    currentProject() {
      return this.$store.state.projects.current;
    },
    currentObs() {
      return this.$store.state.observation.current;
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

    this.map = L.map('obsMap').setView([51.505, -0.09], 13);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    let m;
    this.map.on('click', function(e){
      m = L.marker(e.latlng,{ draggable: true })
      m.addTo(this)
      console.log(m);
      _this.$store.commit('setCoordinates', m._latlng)
    });
  },


  methods: {
    formHasErrors(){
      let hasError = false
      for (var i = 0; i < this.$refs.fields.length; i++) {
        if(this.$refs.fields.hasError === true){
          hasError = true
        }
      }
      
      return hasError;
    },


    finish(){
      if(!this.formHasErrors()){
        this.$store.commit('setCurrentObsStatus', 'finished')

        if(!this.currentObs.stationId)
          this.$store.dispatch('createStation')

        this.$f7.mainView.router.load({url: '/projects/' + this.currentProject.ID})
      } else {
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