import {runInAction} from "mobx";
import {userStore} from "../store/UserStore";
import {authStore} from "../store/AuthStore";
import {configStore} from "../store/ConfigStore";



export function authService() {

  runInAction(() => {

    for (let user of configStore.users) {
      if (user.login !== authStore.login && user.password !== authStore.password) {
        authStore.isError = true
        return
      }
    }


    userStore.login = authStore.login
    userStore.password = authStore.password
    authStore.login = ''
    authStore.password = ''
    authStore.isError = false
  })

}