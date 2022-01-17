<template>
  <div>
    <h2>echo-ui</h2>
    <Ebutton></Ebutton>
    <EIcon></EIcon>
    <EAlert></EAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ebutton from './example/button.vue'
import  EIcon  from './example/icon.vue'
import EAlert from './example/alert.vue'
export default defineComponent({
  components:{
    Ebutton,
    EIcon,
    EAlert
  },
  setup () {


    return {}
  }
})
</script>

<style scoped>

</style>
