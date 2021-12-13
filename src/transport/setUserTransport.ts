import {User} from "../store/UserStore";


export async function setUserTransport(): Promise<void> {

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