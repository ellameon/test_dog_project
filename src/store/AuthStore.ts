import {observable} from "mobx";


export interface User {
  login: string
  password: string
}

export const authStore = observable<User>({
  login: '',
  password: ''
})