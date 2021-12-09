import {User} from "../store/UserStore";


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

  const allowedUsersToServer = new Map()
  allowedUsers.map((user) => {
    for (user of allowedUsers) {
      allowedUsersToServer.set(user.login, user.password)
    }
  })


  localStorage.setItem("users", JSON.stringify(allowedUsersToServer))
}