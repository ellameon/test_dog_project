import {observer} from "mobx-react";
import React from "react";

import './BottomPanel.css'
import {DefaultDogStore} from "../../stores/DefaultDogStore";


export const BottomPanel = observer(function ControlPanel() {

    const {isChecked} = DefaultDogStore

    const isDisabled = !isChecked

    return <>
        <div className="row center-block ">

            <div className="center-block p-3">
                <button
                    disabled={isDisabled}
                    className="btn btn-outline-dark Button "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">удалить выделенные картинок
                </button>
            </div>
        </div>
    </>
})