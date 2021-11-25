import {observer} from "mobx-react";
import React, {useCallback} from "react";
import './BottomPanel.css'
import {DefaultDogStore} from "../../stores/DefaultDogStore";
import {DogController} from "../../../controller/DogController";


export const BottomPanel = observer(function ControlPanel() {

    const openModal = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        DogController.openMassModal()
    }, [])

    const {isChecked} = DefaultDogStore
    const isDisabled = !isChecked

    return <>
        <div className="row center-block ">
            <div className="center-block p-3">
                <button
                    disabled={isDisabled}
                    className="btn btn-outline-dark Button "
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">удалить выделенные картинки
                </button>
            </div>
        </div>
    </>
})