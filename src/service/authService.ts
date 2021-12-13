import {getUserTransport} from "../transport/getUserTransport";
import {runInAction} from "mobx";
import {userStore} from "../store/UserStore";
import {authStore} from "../store/AuthStore";


export async function authService(): Promise<void> {

  const user = await getUserTransport()

  runInAction(() => {

    if (user === undefined) {
      authStore.isError = true
      return
    }

    userStore.login = user.login
    userStore.password = user.password
    authStore.login = ''
    authStore.password = ''
    authStore.isError = false
  })
}