import {User} from "../store/AuthStore";


export function setUserTransport() {
  const admin: User = {
    login: 'admin',
    password: 'elephant'
  }

  const operator: User = {
    login: 'operator',
    password: 'elephant'
  }

  const allowedUsers: Array<User> = [admin, operator]
  localStorage.setItem("users", JSON.stringify(allowedUsers))
}