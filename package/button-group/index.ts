import EButtonGroup from './src/index.vue'
import '../../styles/button-group.scss'
import {App} from 'vue'
EButtonGroup.install = (app:App) => {
  app.component(EButtonGroup.name, EButtonGroup)
}

export default EButtonGroup
