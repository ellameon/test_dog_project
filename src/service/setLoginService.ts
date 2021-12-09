import {runInAction} from "mobx";
import {userStore} from "../store/UserStore";

export function setLoginService(login: string) {
  runInAction(() => {
    userStore.login = login
  })
}