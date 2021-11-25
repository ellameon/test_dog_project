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

    return <div className="mainDiv">
        <div className="card mainScreen m-0 border-0" id = "mainScreen">
            <div className="row justify-content-md-center m-0">
                <div className="col col-lg-1">
                </div>
                <div className="col-md-auto">
                    <MainImage/>
                    <UrlTable/>
                    <ModalWindow/>
                    <BottomPanel/>
                </div>
            </div>
        </div>
        <div className="card">
        </div>
    </div>

    function IntervalRequest() {
        setInterval(DogController.AddDog, 30000)
    }
})