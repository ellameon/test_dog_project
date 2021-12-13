import {observable} from "mobx";


export interface User {
  login: string
  password: string
}

export const userStore = observable<User>({
  login: '',
  password: ''
})