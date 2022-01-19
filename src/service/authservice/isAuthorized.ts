import {userStore} from "../../store/UserStore";

export function isAuthorized(): boolean {
  return userStore.login !== ''
}