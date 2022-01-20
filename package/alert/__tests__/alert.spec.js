import EAlert from '../src/index.vue'
import { mount } from '@vue/test-utils'

describe('alert.vue', () => {
  describe('props', () => {
    it('title', () => {
      const wrapper = mount(EAlert, {
        props: {
          title: 'test title'
        }
      })

      const wrapperSlot = mount(EAlert, {
        slots: {
          title: () => {
            return 'title slot'
          }
        }
      })

      expect(wrapper.find('span').text()).toBe('test title')
      expect(wrapperSlot.find('span').text()).toBe('title slot')
    })

    it('description', () => {
      const wrapper = mount(EAlert, {
        props: {
          description: 'test description'
        }
      })
      const wrapperSlot = mount(EAlert, {
        slots: {
          default: () => {
            return 'description slot'
          }
        }
      })
      expect(wrapper.find('.e-alert__description').text()).toBe(
        'test description'
      )
      expect(wrapperSlot.find('.e-alert__description').text()).toBe(
        'description slot'
      )
    })

    it('closable', () => {
      const wrapperTrue = mount(EAlert, {
        props: {
          closable: true
        }
      })

      const wrapperTrueWithText = mount(EAlert, {
        props: {
          closable: true,
          closeText: '知道了'
        }
      })
      const wrapperFalse = mount(EAlert, {
        props: {
          closable: false
        }
      })
      expect(wrapperTrue.find('.e-alert__closebtn').attributes('style')).toBe(
        undefined
      )
      expect(wrapperTrueWithText.find('.e-alert__closebtn').text()).toBe(
        '知道了'
      )
      expect(wrapperFalse.find('.e-alert__closebtn').attributes('style')).toBe(
        'display: none;'
      )
    })
  })
  it('showIcon', () => {
    const wrapperTrue = mount(EAlert, {
      props: {
        showIcon: true
      }
    })
    const wrapperFalse = mount(EAlert, {
      props: {
        showIcon: false
      }
    })
    expect(wrapperTrue.find('.e-alert__icon').exists()).toBe(true)
    expect(wrapperFalse.find('.e-alert__icon').exists()).toBe(false)
  })
})

describe('event', () => {
  it('close', () => {
    const wrapper = mount(EAlert)
    wrapper.find('.e-alert__closebtn').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
