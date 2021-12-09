import React, {useCallback} from "react";
import {observer} from "mobx-react";
import './MainImage.scss'
import {DogController} from "../../../controller/DogController";
import {dogsStore} from "../../../store/DogStore";
import {Carousel} from "../carousel/Carousel";
import {timerStore} from "../../../store/TimerStore";


export const MainImage = observer(function MainImage() {

  const dogsArray = dogsStore.dogs
  const urlArray = dogsArray.map(dog => dog.url)
  const lastDog = dogsArray[dogsArray.length - 1]
  const isDogExists = lastDog !== undefined
  const toggleButton = (timerStore.intervalId === 0) ? 'Запустить таймер' : "Остановить таймер"

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
          сменить картинку
        </button>
        <button type="button"
                onClick={timerToggle}
                className="btn button-top btn-outline-dark">
          {toggleButton}
        </button>
      </div>
    </div>
  </div>
})
