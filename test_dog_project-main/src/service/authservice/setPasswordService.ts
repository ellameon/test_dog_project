import {runInAction} from "mobx";
import {authStore} from "../../store/AuthStore";

export function setPasswordService(password: string): void {
  runInAction(() => {
    authStore.password = password
  })
}