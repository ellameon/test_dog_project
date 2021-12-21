import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {webSocketStore} from "../../store/webSocketOpenStore";


export const AlertTab = observer(function AlertTab() {

  const [isShown, setIsShown] = useState(true)

  function AlertShow() {
    setTimeout(() => {
      setIsShown(false)
    }, 5000)
  }

  useEffect(() => {
    AlertShow()
  }, [setIsShown])

  if (!isShown) {
    return <div/>
  }

  if (!webSocketStore.isWebSocketOpen) {
    return <div>
      <div className="alert alert-danger alert-tab" role="alert">
        Вы не подключились к серверу!
      </div>
    </div>
  } else {
    return <div>
      <div className="alert alert-secondary alert-tab" role="alert">
        Вы подключились к серверу! Сервер приветствует Собак!
      </div>
    </div>
  }
})