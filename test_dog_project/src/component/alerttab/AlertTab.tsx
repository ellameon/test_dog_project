import {observer} from "mobx-react";
import React from "react";
import {webSocketStore} from "../../store/webSocketStore";
import {DogController} from "../../controller/DogController";
import {alertShowStore} from "../../store/AlertShowStore";


export const AlertTab = observer(function AlertTab() {
  const isShown = alertShowStore.isAlertShown

  DogController.alertShow()

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