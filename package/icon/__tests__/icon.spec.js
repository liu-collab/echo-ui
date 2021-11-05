import { mount } from '@vue/test-utils'
import Icon from '../src/icon.vue'

describe('Icon', () => {
  it('test', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test'
      }
    })
    expect(wrapper.classes()).toContain('e-icon-test')
  })
})
