import {userStore} from "../store/UserStore";

export function logOutService(): void {
  userStore.login = ''
  userStore.password = ''
}