import {observable} from "mobx";


export interface Auth {
  login: string
  password: string
  isError: boolean
}

export const authStore = observable<Auth>({
  login: '',
  password: '',
  isError: false
})