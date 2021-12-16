import React, {useCallback} from "react";
import {observer} from "mobx-react";
import './MainImage.scss'
import {DogController} from "../../../controller/DogController";
import {dogsStore} from "../../../store/DogStore";
import {Carousel} from "../carousel/Carousel";
import {timerStore} from "../../../store/TimerStore";
import {useTranslation} from "react-i18next";


export const MainImage = observer(function MainImage() {

  const {t} = useTranslation();
  const dogsArray = dogsStore.dogs
  const urlArray = dogsArray.map(dog => dog.url)
  const lastDog = dogsArray[dogsArray.length - 1]
  const isDogExists = lastDog !== undefined
  const stopButton = "MainScreen.buttons.stopTimerButton"
  const startButton = "MainScreen.buttons.startTimerButton"
  const toggleButton = (timerStore.intervalId === 0) ? stopButton : startButton


  const changeDog = useCallback(() => {
    DogController.getNewDog()
    DogController.autoRequestRestart()
  }, [])

  const timerToggle = useCallback(() => {
    DogController.toggleAutoRequest()

  }, [])

  return <div className="justify-content-center main-image-container">
    <div className="row pt-3  justify-content-center">
      <div className=' col-7'>
        {isDogExists && (
          <Carousel
            urlArray={urlArray}
            activeIndex={dogsArray.length - 1}/>
        )}
        {!isDogExists && (
          <img
            src="https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg"
            alt={'...'}
            className='main-image'/>
        )}
      </div>
    </div>
    <div className=" col p-3 ">
      <div className="row justify-content-sm-between">
        <button type="button"
                onClick={changeDog}
                className="btn button-top btn-outline-dark">
          {t("MainScreen.buttons.changeDogButton")}
        </button>
        <button type="button"
                onClick={timerToggle}
                className="btn button-top btn-outline-dark">
          {t(toggleButton)}
        </button>
      </div>
    </div>
  </div>;
})
