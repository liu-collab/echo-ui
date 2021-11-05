<template>
  <div>
    <h2>echo-ui</h2>
    <Ebutton></Ebutton>
    <EIcon></EIcon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ebutton from './example/button.vue'
import  EIcon  from './example/icon.vue'
export default defineComponent({
  components:{
    Ebutton,
    EIcon
  },
  setup () {


    return {}
  }
})
</script>

<style scoped>

</style>
