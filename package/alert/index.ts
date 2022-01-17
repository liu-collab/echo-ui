import EAlert from './src/index.vue'
import '../../styles/alert.scss'
import {App} from 'vue'

EAlert.install = function(app:App) {
  app.component(EAlert.name, EAlert)
}

export default EAlert
