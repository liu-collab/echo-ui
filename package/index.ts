import EButton from './button'
import '../styles/index.scss'
import { App } from 'vue'

const components = [EButton]

const defaultInstallOpt = {
  size: 'medium',
  zIndex: 2000
}
const install = (app: App, options = {}) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
  // 全局注册默认数据
  app.config.globalProperties.$ECHO = Object.assign(
    {},
    defaultInstallOpt,
    options
  )
}

export default {
  version: '1.0.0',
  install
}

export { EButton }
