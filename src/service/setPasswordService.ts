import {runInAction} from "mobx";
import {userStore} from "../store/UserStore";

export function setPasswordService(password: string) {
  runInAction(() => {
    userStore.password = password
  })
}