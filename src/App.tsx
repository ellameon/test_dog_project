import React, {useEffect} from 'react';
import {MainScreen} from "./component/mainscreen/MainScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthScreen} from "./component/authscreen/AuthScreen";
import {DogRecordController} from "./controller/DogRecordController";
import {JournalScreen} from "./component/journalscreen/JournalScreen";
import {RequestScreen} from "./component/requestscreen/RequestScreen";


function App() {
  useEffect( () => {
    DogRecordController.setConfig()
  }, [])

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AuthScreen/>}/>
        <Route path='AuthScreen' element={<AuthScreen/>}/>
        <Route path="MainScreen" element={<MainScreen/>}/>
        <Route path="JournalScreen" element={<JournalScreen/>}/>
        <Route path="RequestScreen" element={<RequestScreen/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
