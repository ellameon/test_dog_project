import {observer} from "mobx-react";
import {Navigation} from "../navigation/Navigation";
import React from "react";


export const SecondScreen = observer(function SecondPage() {

  return <div>
    <Navigation/>
  </div>
})