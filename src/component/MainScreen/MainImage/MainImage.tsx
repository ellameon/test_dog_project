import React, {useCallback} from "react";
import {observer} from "mobx-react";
import './MainImage.css'
import {DefaultDogStore} from "../../stores/DefaultDogStore";
import {DogController} from "../../../controller/DogController";


export const MainImage = observer(function MainImage() {

    const changeDog = useCallback(() => {
        DogController.AddDog()
    }, [])

    return <div className="row justify-content-md-center">
        <div className=" pt-3 ">
            <img src={DefaultDogStore.message} className="rounded mx-auto d-block"/>

        </div>
        <div className=" row p-3 ">

                <div className="col col-lg-4">
                </div>
                <div className="col-md-auto pl-0">
                    <button onClick={changeDog} className="btn btn-outline-dark pl-0">сменить картинку</button>
                </div>
                <div className="col col-lg-4">
                </div>

        </div>
    </div>
})
