import {observer} from "mobx-react";
import {Navigation} from "../navigation/Navigation";
import React from "react";
import {JournalTable} from "./journaltable/JournalTable";


export const JournalScreen = observer(function JournalScreen() {

  return <div>
    <Navigation/>
    <div className="main-screen m-0">
      <div className="row justify-content-md-center m-0">
        <div className="col-md-auto">

          <JournalTable/>

        </div>
      </div>
    </div>
  </div>
})