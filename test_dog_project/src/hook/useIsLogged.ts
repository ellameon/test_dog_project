import {userStore} from "../store/UserStore";

export function useIsLogged(): boolean {
  return userStore.login !== ''
}