import {authStore, User} from "../store/AuthStore";



export function getUserTransport(): User | undefined {

  const stringUsers: string | null = localStorage.getItem('users')

  if (stringUsers !== null) {
    const usersFromServer: Array<User> = JSON.parse(stringUsers)

    let user;
    for (user of usersFromServer) {
      if (user.login === authStore.login && user.password === authStore.password) {
        return user
      }
    }
  }
}