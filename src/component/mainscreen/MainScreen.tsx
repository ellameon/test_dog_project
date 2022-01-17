import {observer} from "mobx-react";
import {DogTable} from "./urltable/DogTable";
import {DogRecordController} from "../../controller/DogRecordController";
import {MainImage} from "./mainimage/MainImage";
import './MainScreen.scss'
import React, {useEffect} from "react";
import {ModalWindow} from "./modalwindow/ModalWindow";
import {BottomPanel} from "./bottompanel/BottomPanel";
import {Navigation} from "../navigation/Navigation";
import {AlertTab} from "../alerttab/AlertTab";
import {useIsLogged} from "../../hook/useIsLogged";
import {webSocketStore} from "../../store/webSocketStore";
import {useTranslation} from "react-i18next";


export const MainScreen = observer(function MainScreen() {


  const isUserLogged = useIsLogged()
  const {t} = useTranslation();
  const socket: boolean = webSocketStore.isWebSocketOpen
  const alertClass = (socket) ? "alert alert-secondary alert-tab" : "alert alert-danger alert-tab"
  const alertText = (socket) ? t("AlertTab.connect") : t("AlertTab.disconnect")

  useEffect(() => {
      DogRecordController.dogRequest()
    if (isUserLogged) {
      DogRecordController.alertShow()
    }
    }, [ isUserLogged ])

  return <div className="main-div">
    <Navigation/>
    <div className="main-screen m-0">
      <div className="row justify-content-md-center m-0">
        <div className="col-md-auto">
          <MainImage/>
          <DogTable/>
          <ModalWindow/>
          <BottomPanel/>
          <AlertTab alertText={alertText} alertClass={alertClass}/>
        </div>
      </div>
    </div>
  </div>
})
