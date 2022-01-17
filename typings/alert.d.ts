import { EchoUIComponent } from './component'

export type AlertType = 'success' | 'warning' | 'info' | 'error'

export type AlertEffect = 'dark' | 'light'

interface IAlert extends EchoUIComponent {
  title: string
  type: AlertType
  description: string
  closable: boolean
  center: boolean
  closeText: string
  showIcon: boolean
  effect: AlertEffect
}

export const EAlert: IAlert
