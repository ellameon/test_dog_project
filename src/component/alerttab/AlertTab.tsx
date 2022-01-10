import {observer} from "mobx-react";
import React from "react";
import {webSocketStore} from "../../store/webSocketStore";
import {DogController} from "../../controller/DogController";
import {alertShowStore} from "../../store/AlertShowStore";
import {useTranslation} from "react-i18next";


export const AlertTab = observer(function AlertTab() {

  const {t} = useTranslation();
  const isShown = alertShowStore.isAlertShown
  const socket: boolean = webSocketStore.isWebSocketOpen
  const alertClass: string = (socket) ? "alert alert-secondary alert-tab" : "alert alert-danger alert-tab"
  const alertText = (socket) ? "AlertTab.connect" : "AlertTab.disconnect"

  DogController.alertShow()

  if (!isShown) {
    return <div/>
  }

  return <div>
    <div className={alertClass} role="alert">
      {t(alertText)}
    </div>
  </div>

})