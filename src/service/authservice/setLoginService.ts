import {runInAction} from "mobx";
import {authStore} from "../../store/AuthStore";

export function setLoginService(login: string): void {
  runInAction(() => {
    authStore.login = login
  })
}