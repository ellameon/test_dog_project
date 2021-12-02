import {observer} from "mobx-react";
import {UrlTable} from "./urltable/UrlTable";
import {BottomPanel} from "./bottomPanel/BottomPanel";
import {DogController} from "../../controller/DogController";
import {MainImage} from "./mainimage/MainImage";
import './main-screen.css'
import {useEffect} from "react";
import {ModalWindow} from "./modalwindow/ModalWindow";


export const MainScreen = observer(function MainScreen() {

  useEffect(intervalRequest, [])

  return <div className="main-div">
    <div className="card main-screen m-0 ">
      <div className="row justify-content-md-center m-0">
        <div className="col-md-auto">
          <MainImage/>
          <UrlTable/>
          <ModalWindow/>
          <BottomPanel/>
        </div>
      </div>
    </div>
  </div>

  function intervalRequest() {
    setInterval(DogController.changeDog, 30000)
  }
})