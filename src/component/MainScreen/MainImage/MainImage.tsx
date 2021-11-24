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
        <div className=" col p-3 flex ">
            <div className="row d-flex align-items-center">
                <button type="button" onClick={changeDog} className="btn align-items-center btn-outline-dark">сменить
                    картинку
                </button>
            </div>
        </div>
    </div>
})
