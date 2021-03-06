import { App } from 'vue'

/** ElementUI component common definition */
export interface EchoUIComponent {
  /** Install component into Vue */
  install: (app: App, ...options: any[]) => any
}

/** Component size definition for button, input, etc */
export type EchoUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type EchoUIHorizontalAlignment = 'left' | 'center' | 'right'
