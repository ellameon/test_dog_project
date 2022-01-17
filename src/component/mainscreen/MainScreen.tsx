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


export const MainScreen = observer(function MainScreen() {

  const isUserLogged = useIsLogged()
  useEffect(() => {
      DogRecordController.dogRequest()
    }
    , [])

  return <div className="main-div">
    <Navigation/>
    <div className="main-screen m-0">
      <div className="row justify-content-md-center m-0">
        <div className="col-md-auto">
          <MainImage/>
          <DogTable/>
          <ModalWindow/>
          <BottomPanel/>
          {isUserLogged && <AlertTab/>}
        </div>
      </div>
    </div>
  </div>
})
