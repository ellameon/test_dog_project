import {isAuthorized} from "../service/authservice/isAuthorized";


export function useIsLogged(): boolean {
  return isAuthorized()
}