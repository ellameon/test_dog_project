import {observer} from "mobx-react";
import {Auth} from "./auth/Auth";
import {Navigate} from "react-router";
import './auth/AuthScreen.scss'
import {useIsLogged} from "../../hook/useIsLogged";


export const AuthScreen = observer(function AuthScreen() {

  const isUserLogged = useIsLogged()
  if (isUserLogged) {
    return <Navigate to="/MainScreen"/>
  }

  return <div className="main-div">
    <div className="auth-screen">
      <div className='auth-area'>
        <Auth/>
      </div>
    </div>
  </div>
})