<template>
  <div>
    <h2>echo-ui</h2>
    <Ebutton></Ebutton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ebutton from './example/button.vue'
export default defineComponent({
  components:{
    Ebutton
  },
  setup () {


    return {}
  }
})
</script>

<style scoped>

</style>
