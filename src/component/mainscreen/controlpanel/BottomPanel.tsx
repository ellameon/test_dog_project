import {observer} from "mobx-react";
import React, {useCallback} from "react";
import './bottomPanel.css'
import {DogController} from "../../../controller/DogController";
import {dogsStore} from "../../../stores/DogStore";
import {checkedDogsStore} from "../../../stores/CheckedDogsStore";


export const BottomPanel = observer(function BottomPanel() {
    const dogs = dogsStore.dogs
    const lastDog = dogs[dogs.length - 1]
    const isLeastOneChecked = checkedDogsStore.checkedDogs.length > 0
    const isDisabled = lastDog === undefined || !isLeastOneChecked
    const openModal = useCallback(() => {
        DogController.openMassModal()

    }, [])

    return <>
        <div className="row center-block ">
            <div className="center-block p-3">
                <button
                    disabled={isDisabled}
                    className="btn btn-outline-dark button "
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">удалить выделенные картинки
                </button>
            </div>
        </div>
    </>
})