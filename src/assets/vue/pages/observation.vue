<template>
<f7-page with-subnavbar>
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
      <f7-list form>
    
      
  <f7-list-item v-for="(field, index) in trace" v-bind:key="field.id">

    <custom-input v-if="field.type === 'number'" :param=field>
    </custom-input>
  </f7-list-item>

  </f7-list>

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

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" fill @click="submit">Next</f7-button>
      </f7-toolbar>


    </f7-tab>

    <f7-tab id="obsTab2">

    </f7-tab>

    <f7-tab id="obsTab3">
      <f7-block>

      </f7-block>
    </f7-tab>

  </f7-tabs>
</f7-page>
</template>

<script>
import CustomInput from './../input.vue'
import _ from 'lodash'
export default {

  //'cause we can't bind vuex with dynamic v-models

  data: function(){
    return {
      trace: []
    }
  },

  components: {
    'custom-input': CustomInput
  },

  beforeCreate () {
    let payload = { id: parseInt(this.$route.params.id) }
    this.$store.dispatch('setInitialState', payload)
    .then(() => {
      this.trace = _.cloneDeep(this.$store.state.observation.trace)
    });
  },


  methods: {
    submit(){
      this.$store.dispatch('saveObservation', this.$data);
    },

    onActionClick(e){
      console.log(e);
    },

    onChange (event){
      console.log('change');
    }
  }
}
</script>