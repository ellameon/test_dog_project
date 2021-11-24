import {observer} from "mobx-react";
import React, {useCallback} from "react";
import {DogController} from "../../../controller/DogController";


export const BottomPanel = observer(function ControlPanel() {

    const deleteSomeDogs = useCallback(() => {
        DogController.DeleteSomeDogs()
    }, [])

    return <>
        <div className="row justify-content-center ">

            <div className="col-6  p-3">
                <button onClick={deleteSomeDogs}
                        className="btn btn-outline-dark">удалить несколько выделенных картинок</button>
            </div>
        </div>
    </>
})