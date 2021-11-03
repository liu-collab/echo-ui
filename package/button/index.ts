import EButton from './src/button.vue'
import '../../styles/button.scss'
import { App } from 'vue'

EButton.install = (app: App) => {
  app.component(EButton.name, EButton)
}
console.log(222)
export default EButton
