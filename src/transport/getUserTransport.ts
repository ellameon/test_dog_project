export function getUserTransport(login: string, password: string) {

  const stringUsers = localStorage.getItem('users')

  let usersFromServer: Map<string, string>
  if (stringUsers !== null) {

    usersFromServer = JSON.parse(stringUsers)

    if (usersFromServer.has("admin") ) {
      return usersFromServer.get('admin')
    } else alert('error')
  }
}