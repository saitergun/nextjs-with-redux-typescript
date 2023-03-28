import { IChannelType, IMe } from './models'

export declare interface IStateApp {
  loading: boolean
  date: string
}

export declare interface IStateAuth {
  me: IMe | null
}

export declare interface IState {
  app: IStateApp
  auth: IStateAuth
}
