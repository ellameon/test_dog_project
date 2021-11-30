import React, {useCallback} from "react";
import {observer} from "mobx-react";
import './mainImage.css'
import {DogController} from "../../../controller/DogController";
import {dogsStore} from "../../../stores/DogStore";


export const MainImage = observer(function MainImage() {
    const dogs = dogsStore.dogs
    const lastDog = dogs[dogs.length - 1]
    const currentDogUrl = lastDog === undefined
        ? "https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg"
        : lastDog.message

    const changeDog = useCallback(() => {
        DogController.addDog()
    }, [])

    return <div className="col justify-content-md-center">
        <div className=" pt-3 ">
            <img src={currentDogUrl}
                 className="rounded mx-auto d-block main-image"
                 alt={'картинка собаки'}/>
        </div>
        <div className=" col p-3 ">
            <div className="row justify-content-center">
                <button type="button"
                        onClick={changeDog}
                        className="btn button-top btn-outline-dark">
                    сменить картинку
                </button>
            </div>
        </div>
    </div>
})
