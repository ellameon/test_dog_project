import React from 'react';
import {MainScreen} from "./component/mainscreen/MainScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SecondPage} from "./component/secondpage/SecondPage";
import {AuthScreen} from "./component/auth/AuthScreen";


function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AuthScreen/>}/>
        <Route path='AuthScreen' element={<AuthScreen/>}/>
        <Route path="MainScreen" element={<MainScreen/>}/>
        <Route path="SecondPage" element={<SecondPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
