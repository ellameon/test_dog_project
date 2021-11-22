import {observer} from "mobx-react";
import {UrlTable} from "./UrlTable/UrlTable";
import {BottomPanel} from "./ControlPanel/BottomPanel";
import {useEffect} from "react";
import {DogController} from "../../controller/DogController";
import {MainImage} from "./MainImage/MainImage";
import './MainScreen.css'



export const MainScreen = observer(function MainScreen() {

    useEffect((DogController.getAutoDataFromServer));
    return <>
        <div className="card bg-im mainScreen margin-0">
            <div className="row justify-content-md-center">
                <div className="col col-lg-1">
                </div>
                <div className="col-md-auto">

                    <MainImage/>
                    <UrlTable/>
                </div>
                <div className="col col-lg-1">
                </div>
            </div>
            <BottomPanel/>
        </div>

        <div className="card">

        </div>

    </>
})