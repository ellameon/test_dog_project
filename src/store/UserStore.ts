import {observable} from "mobx";
import {User} from "./AuthStore";


export const userStore = observable<User>({
  login: '',
  password: ''
})