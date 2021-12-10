import {getUserTransport} from "../transport/getUserTransport";
import {runInAction} from "mobx";
import {userStore} from "../store/UserStore";
import {authStore} from "../store/AuthStore";


export function authService(): void {
  runInAction(() => {
    const user = getUserTransport()

    userStore.login = user?.login as string
    userStore.password = user?.password as string
    authStore.login = ''
    authStore.password = ''
  })
}