import {observer} from "mobx-react";
import {DogTable} from "./urltable/DogTable";
import {DogController} from "../../controller/DogController";
import {MainImage} from "./mainimage/MainImage";
import './MainScreen.scss'
import {useEffect} from "react";
import {ModalWindow} from "./modalwindow/ModalWindow";
import {BottomPanel} from "./bottompanel/BottomPanel";
import {Navigation} from "../navigation/Navigation";
import {userStore} from "../../store/UserStore";
import {Navigate} from "react-router";

export const MainScreen = observer(function MainScreen() {

  let isUserLogged: boolean
  isUserLogged = userStore.login !== '';


  useEffect(() => {
      DogController.dogRequest()
    }
    , [])

  if (isUserLogged) {
    return <div className="main-div">
      <Navigation/>
      <div className="card main-screen m-0 ">
        <div className='row m-0'>
          <div className='col-md-12 p-0'>
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
      </div>
    </div>
  } else {
    return <Navigate to="/AuthScreen"/>
  }
})
