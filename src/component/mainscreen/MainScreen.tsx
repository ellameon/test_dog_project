import {observer} from "mobx-react";
import {DogTable} from "./urltable/DogTable";
import {BottomPanel} from "./bottomPanel/BottomPanel";
import {DogController} from "../../controller/DogController";
import {MainImage} from "./mainimage/MainImage";
import './MainScreen.scss'
import {useEffect} from "react";
import {ModalWindow} from "./modalwindow/ModalWindow";
import {timerStore} from "../../store/TimerStore";


export const MainScreen = observer(function MainScreen() {

  const timer = timerStore.timerIsRun

  useEffect(() => {
      DogController.dogRequest(timer)
    }
    , [timer])

  return <div className="main-div">
    <div className="card main-screen m-0 ">
      <div className="row justify-content-md-center m-0">
        <div className="col-md-auto">
          <MainImage/>
          <DogTable/>
          <ModalWindow/>
          <BottomPanel/>
        </div>
      </div>
    </div>
  </div>
})
