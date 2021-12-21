const Websocket = require('ws')
const wsServer = new Websocket.Server({port: 9000})


wsServer.on('connection', onConnect)

function onConnect(wsClient) {
  console.log('Собаки подключились');
  wsClient.send('Привет собакам');

  wsClient.on('close', function () {
    console.log('Собаки не подключены к серверу');
  })

  wsClient.on('message', function (message) {
    const jsonMessage = JSON.parse(message)
    const action = jsonMessage.action
    const data = jsonMessage.data
    try {
      switch (action) {
        case "ECHO":
            wsClient.send( `привет собака` + data)
            console.log('Привет, собака с номером ' + data + ', рады тебе!')
          break
        default:
          console.log('Собаки гавкнули неправильно')
          wsClient.send('собаки гавкнули неверно')
          break
      }
    } catch (error) {
      console.log('Ошибка', error)
    }
  })
}

console.log('Сервер запущен на 9000 порту')

