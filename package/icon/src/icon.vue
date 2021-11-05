<template>
  <i :class="`e-icon-${name}`"></i>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EIcon',
  props: {
    name: String
  }
})
</script>
