import React, {useCallback} from "react";
import {observer} from "mobx-react";
import './MainImage.css'
import {DefaultDogStore} from "../../stores/DefaultDogStore";
import {DogController} from "../../../controller/DogController";


export const MainImage = observer(function MainImage() {

    const changeDog = useCallback(() => {
        DogController.AddDog()
    }, [])

    return <div className="col justify-content-md-center">
        <div className=" pt-3 ">
            <img src={DefaultDogStore.message} className="rounded mx-auto d-block"/>
        </div>
        <div className=" col p-3 ">
            <div className="row justify-content-center">
                <button type="button" onClick={changeDog} className="btn ButtonTop btn-outline-dark">сменить
                    картинку
                </button>
            </div>
        </div>
    </div>
})
