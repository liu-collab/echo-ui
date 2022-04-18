import { App } from 'vue'
import {
  EchoUIComponent,
  EchoUIComponentSize,
  EchoUIHorizontalAlignment
} from './component'

export { EButton } from './button'
export { EButtonGroup } from './button-group'
export { EIcon } from './icon'
export { EAffix } from './affix'

export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

export function install(app: App, ...options: any[]): any

export type Component = EchoUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = EchoUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = EchoUIHorizontalAlignment

export type GlobalOptions = {
  size?: number | string
  zIndex?: number
}
