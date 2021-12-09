import {getUserTransport} from "../transport/getUserTransport";

export function getUserService(login: string, password: string): void{
  getUserTransport(login, password)
}