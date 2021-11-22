import {observer} from "mobx-react";
import React, {useCallback} from "react";
import {DogController} from "../../../controller/DogController";

export const BottomPanel = observer(function ControlPanel(){
    const changeDog = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        DogController.getDataService()
    }, [])
    return <>
        <div className="row rounded mx-auto d-block">
<button onClick={changeDog} className="btn btn-outline-dark">сменить картинку</button>
        </div>
    </>
})