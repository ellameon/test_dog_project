import {authStore} from "../store/AuthStore";
import {User} from "../store/UserStore";


export async function getUserTransport(): Promise<User | undefined> {

  const stringUsers: string | null = localStorage.getItem('users')

  if (stringUsers !== null) {
    const usersFromServer: Array<User> = JSON.parse(stringUsers)

    for (let user of usersFromServer) {
      if (user.login === authStore.login && user.password === authStore.password) {
        return user
      }
    }
  }
}