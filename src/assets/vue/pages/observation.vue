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
        <f7-list-item v-for="field in trace">
          <f7-label>{{ field.name }}</f7-label>
          <f7-input name="name" type="text" placeholder="Name"></f7-input>
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
          <f7-button class="full-width" fill>Next</f7-button>
      </f7-toolbar>


    </f7-tab>

    <f7-tab id="obsTab2">
    <f7-block-title>Form</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input name="name" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input name="email" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>URL</f7-label>
        <f7-input name="url" type="url" placeholder="URL"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input name="tel" type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input name="date" type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Date time</f7-label>
        <f7-input name="datetime" type="datetime-local"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input name="gender" type="select">
          <option value="1">Male</option>
          <option value="2">Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Switch</f7-label>
        <f7-input name="switch" type="switch" @change="onChange"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Range</f7-label>
        <f7-input type="range" min="0" max="100" step="1" value="90"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input name="textarea" type="textarea" placeholder="Textarea"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Resizable</f7-label>
        <f7-input name="textarea" type="textarea" resizable placeholder="Textarea"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Datepicker</f7-label>
        <f7-datepicker date-format="DD, dd MM yyyy" :value="new Date().getTime()"/>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Range Datepicker</f7-label>
        <f7-datepicker date-format="dd MM yyyy" :range-picker="true"/>
      </f7-list-item>
      <f7-list-item>
        <f7-label>File</f7-label>
        <f7-input type="file"></f7-input>
      </f7-list-item>

    </f7-list>

    <f7-block-title>Form With Floating Labels</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label floating>Name</f7-label>
        <f7-input name="name" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label floating>Password</f7-label>
        <f7-input name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label floating>E-mail</f7-label>
        <f7-input name="email" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Form Without Labels</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-input name="name" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input name="email" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Form Storage</f7-block-title>
    <f7-list form id="form" store-data>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input name="name" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input name="email" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input name="date" type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Date time</f7-label>
        <f7-input name="datetime" type="datetime-local"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input name="gender" type="select">
          <option value="1">Male</option>
          <option value="2">Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Switch</f7-label>
        <f7-input name="switch" type="switch" @change="onChange"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Range</f7-label>
        <f7-input type="range" min="0" max="100" step="1" value="90"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input name="textarea" type="textarea" placeholder="Textarea"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Checkboxes</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" checkbox name="my-checkbox" :value="n" :title="'Checkbox ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Radios</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'Radio ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Buttons</f7-block-title>
    <f7-block inner>
      <p><f7-button>Button</f7-button></p>
      <p><f7-button round>Button Round</f7-button></p>
      <p><f7-button fill>Button Fill</f7-button></p>
      <p>
        <f7-buttons>
          <f7-button round active>Button 1</f7-button>
          <f7-button round>Button 2</f7-button>
          <f7-button round>Button 3</f7-button>
        </f7-buttons>
      </p>
      <p>
        <f7-buttons color="orange">
          <f7-button round big>Button 1</f7-button>
          <f7-button round big active>Button 2</f7-button>
          <f7-button round big>Button 3</f7-button>
        </f7-buttons>
      </p>
      <p>
        <f7-grid>
          <f7-col><f7-button big fill color="green">Send</f7-button></f7-col>
          <f7-col><f7-button big fill color="red">Delete</f7-button></f7-col>
        </f7-grid>
      </p>
      <p>
        <f7-grid>
          <f7-col><f7-button fill raised color="green">Raised</f7-button></f7-col>
          <f7-col><f7-button raised color="red">Raised</f7-button></f7-col>
          <f7-col><f7-button fill raised color="pink">Raised</f7-button></f7-col>
        </f7-grid>
      </p>
    </f7-block>
    </f7-tab>

    <f7-tab id="obsTab3">
      <f7-block>

      </f7-block>
    </f7-tab>

  </f7-tabs>
</f7-page>
</template>

<script>
export default {
  computed: {
    trace() {
      return this.$store.state.observation.observation.trace;
    },
  },

  beforeCreate () {
    console.log(this.$route.params.id);
    this.$store.dispatch('setCurrentObservation', { id: parseInt(this.$route.params.id) })
  },


  methods: {
    onActionClick (e){
      console.log(e);

    },
    onChange (event){
      console.log('change');
    }
  }
}
</script>