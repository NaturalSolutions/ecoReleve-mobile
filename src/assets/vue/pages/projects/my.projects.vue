<template>

  <f7-list>
    <f7-list-group v-for="project in projects">
  <f7-list-item
    checkbox 
    :link="'/project/' + project.id" 
    :title="'Project ' + project.name"
  ></f7-list-item>
</f7-list-group>
  </f7-list>

</template>

<script>
export default {
  
}
</script>