import {observer} from "mobx-react";
import {Navigation} from "../navigation/Navigation";
import {Auth} from "./auth/Auth";


export const AuthScreen = observer(function AuthScreen() {

  return <div className="main-div">
    <Navigation/>
    <div className="card main-screen m-0 ">
      <div className='row m-0'>
        <div className='col-md-12 p-0'>
          <div className="row justify-content-md-center m-0">
            <div className="col-md-auto">
              <Auth/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
})