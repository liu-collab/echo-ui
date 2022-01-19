import EButton from './button'
import EIcon from './icon'
import EAlert from './alert'
import '../styles/index.scss'
import { App } from 'vue'

const components = [EButton, EIcon,EAlert]

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

export { EButton, EIcon,EAlert }
