import React, {useEffect} from 'react';
import {MainScreen} from "./component/mainscreen/MainScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthScreen} from "./component/authscreen/AuthScreen";
import {DogController} from "./controller/DogController";
import {JournalScreen} from "./component/journalscreen/JournalScreen";


function App() {
  useEffect( () => {
    DogController.setConfig()
  }, [])

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AuthScreen/>}/>
        <Route path='AuthScreen' element={<AuthScreen/>}/>
        <Route path="MainScreen" element={<MainScreen/>}/>
        <Route path="JournalScreen" element={<JournalScreen/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
