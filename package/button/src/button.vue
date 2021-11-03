
<template>
  <button
    :class="[
      'e-button',
      type ? 'e-button--' + type : '',
      buttonSize ? 'e-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="e-icon-loading"></i>
    <i v-if="icon && !loading" :class="'e-icon-' + icon"></i>
    <!-- v-if="$slots.default" 作用是防止span标签占位有个小距离 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'EButton', // 注册的组件名
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'text',
          'default'
        ].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => {
        return ['', 'large', 'medium', 'small', 'mini'].includes(val)
      }
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: (val) => {
        return ['button', 'reset', 'submit'].includes(val)
      }
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ['click'], // 触发父组件方法，不写也可以，可以提示，也可以做校验
  setup(props, { emit }) { // 第二个参数 ctx 结构，这里面没有this
    const buttonSize = computed(() => {
      return props.size || 'medium'
    })

    const handleClick = (e) => {
      emit('click', e)
    }
    // dom 中用到的字段都要返回
    return {
      buttonSize,
      handleClick
    }
  }
})
</script>
