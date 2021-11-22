import React from "react";
import {observer} from "mobx-react";
import './MainImage.css'
import {dogsStore} from "../../stores/dogStore";



export const MainImage = observer(function MainImage() {
const dog = dogsStore.dogs[dogsStore.dogs.length - 1 ]

    return <>
        <div >
        <img   src={dog.message} className="rounded mx-auto d-block"/>
        </div>
    </>
})
