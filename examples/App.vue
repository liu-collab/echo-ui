<template>
  <div style="height:1000px">
    <h2>echo-ui</h2>
    <Ebutton></Ebutton>
    <EIcon></EIcon>
    <EAlert></EAlert>
    <EButtonGroup></EButtonGroup>
    <div class="affix">
      <EAffix />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ebutton from './example/button.vue'
import  EIcon  from './example/icon.vue'
import EAlert from './example/alert.vue'
import EButtonGroup from "./example/button-group.vue"
import EAffix from './example/affix.vue'
export default defineComponent({
  components:{
    Ebutton,
    EIcon,
    EAlert,
    EButtonGroup,
    EAffix,
  },
  setup () {


    return {}
  }
})
</script>

<style scoped>
.affix{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
