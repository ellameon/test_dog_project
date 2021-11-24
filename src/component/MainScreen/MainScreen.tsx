import {observer} from "mobx-react";
import {UrlTable} from "./UrlTable/UrlTable";
import {BottomPanel} from "./ControlPanel/BottomPanel";
import {DogController} from "../../controller/DogController";
import {MainImage} from "./MainImage/MainImage";
import './MainScreen.css'
import {useEffect} from "react";
import {ModalWindow} from "./ModalWindow/ModalWindow";


export const MainScreen = observer(function MainScreen() {

    useEffect(IntervalRequest, [])
    return <>
        <div className="card bg-im mainScreen margin-0">
            <div className="row justify-content-md-center">
                <div className="col col-lg-1">
                </div>
                <div className="col-md-auto">
                    <MainImage/>
                    <UrlTable/>
                    <ModalWindow />
                    <BottomPanel/>
                </div>
            </div>
        </div>
        <div className="card">
        </div>
    </>

    function IntervalRequest() {
        setInterval(DogController.AddDog, 30000)
    }
})