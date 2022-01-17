import {observer} from "mobx-react";
import React from "react";
import {alertShowStore} from "../../store/AlertShowStore";


type Props = {
  alertClass: string,
  alertText: string
}

export const AlertTab = observer(function AlertTab(props: Props) {

  const isShown = alertShowStore.isAlertShown
  const alertClass = props.alertClass
  const alertText = props.alertText

  if (!isShown) {
    return <div/>
  }
  return <div>
    <div className={alertClass} role="alert">
      {alertText}
    </div>
  </div>
})