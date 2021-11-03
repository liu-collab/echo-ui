// 返回容器包含组件属性信息
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

const text = '我是测试文本'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' }
    })
    // 名称中包含
    expect(wrapper.classes()).toContain('e-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(Button, {
      props: { icon: 'search' }
    })
    expect(wrapper.find('.e-icon-search').exists()).toBeTruthy()
  })

  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' }
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    })

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.e-icon-loading').exists()).toBeTruthy()
  })

  it('size', () => {
    const wrapper = mount(Button, {
      props: { size: 'medium' }
    })

    expect(wrapper.classes()).toContain('e-button--medium')
  })

  it('plain', () => {
    const wrapper = mount(Button, {
      props: { plain: true }
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(Button, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(Button, {
      props: { circle: true }
    })
    expect(wrapper.classes()).toContain('is-circle')
  })

  it('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: text
      }
    })

    expect(wrapper.text()).toEqual(text)
  })

  test('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: text
      }
    })
    // trigger 操作原生的 dom 事件
    await wrapper.trigger('click')
    console.log(wrapper.emitted(), '---')
    // expect(wrapper.emitted()).toBeDefined()
    expect(wrapper.emitted().click).toBeTruthy()
  })

  test('handle click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>'
      }
    })
    await wrapper.element.querySelector('.inner-slot').click()
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: text
      },
      props: { loading: true }
    })

    await wrapper.trigger('click')
    // loading 时无法点击
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
