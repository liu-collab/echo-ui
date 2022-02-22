<template>
  <div class="e-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EButtonGroup'
})
</script>
<style scoped>
.e-button-group + .e-button-group {
  margin-left: 1px;
}
</style>
