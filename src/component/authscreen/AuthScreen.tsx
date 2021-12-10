import {observer} from "mobx-react";
import {Auth} from "./auth/Auth";
import {userStore} from "../../store/UserStore";
import {Navigate} from "react-router";
import './auth/AuthScreen.scss'


export const AuthScreen = observer(function AuthScreen() {

  let isUserLogged: boolean
  isUserLogged = userStore.login !== '';

  if (isUserLogged) {
    return <Navigate to="/MainScreen"/>
  } else  {
    return <div className="main-div">
      <div className="card main-screen m-0  auth-screen">
        <div className='row m-0 auth-area card b-secondary'>
          <div className='col-md-12 p-0'>
            <div className="row justify-content-md-center m-0 ">
              <div className="col-md-auto">
                <Auth/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})