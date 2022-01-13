import {observer} from "mobx-react";
import {Navigation} from "../navigation/Navigation";
import React from "react";
import {RequestForm} from "./requestform/RequestForm";


export const RequestScreen = observer(function RequestScreen() {
  return <div>
    <Navigation/>
    <div className="main-screen m-0">
      <div className="row justify-content-md-center m-0">
        <div className="col-md-auto">
          <RequestForm/>
        </div>
      </div>
    </div>
  </div>
})