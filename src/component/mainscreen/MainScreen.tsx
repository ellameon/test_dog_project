import {observer} from "mobx-react";
import {DogTable} from "./urltable/DogTable";
import {BottomPanel} from "./bottomPanel/BottomPanel";
import {DogController} from "../../controller/DogController";
import {MainImage} from "./mainimage/MainImage";
import './MainScreen.css'
import {useEffect} from "react";
import {ModalWindow} from "./modalwindow/ModalWindow";


export const MainScreen = observer(function MainScreen() {

  useEffect(() => {
      const intervalId = intervalRequest();
      return () => {
        clearRequestInterval(intervalId)
      }
    }
    , [])

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

  function intervalRequest(): NodeJS.Timeout {
    return setInterval(DogController.getNewDog, 30000);
  }

  function clearRequestInterval(intervalId: NodeJS.Timeout): void {
    clearInterval(intervalId)
  }
})