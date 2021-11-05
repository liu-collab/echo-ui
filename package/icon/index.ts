import EIcon from './src/icon.vue'
import '../../styles/icon.scss'
import { App } from 'vue'

EIcon.install = (app: App) => {
  app.component(EIcon.name, EIcon)
}

export default EIcon
