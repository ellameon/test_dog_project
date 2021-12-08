import {observer} from "mobx-react";

import React from "react";


export const Auth = observer(function Auth() {



  return <div className="justify-content-center main-image-container">
    <div className="row pt-3  justify-content-center">
      <div className=' col-7'>
        <div>
          <label htmlFor="validationLogin" className="form-label">Login</label>
          <input type="text" className="form-control" autoComplete={"off"} id="validationLogin"  required/>
          <div className="valid-feedback">
            Все хорошо!
          </div>
          <div className="invalid-feedback">
            Неверный логин
          </div>
          <label htmlFor="validationPassword" className="form-label">Password</label>
          <input type="password" className="form-control" autoComplete='off' id="validationPassword"  required/>
          <div className="valid-feedback">
            Все хорошо!
          </div>
          <div className="invalid-feedback">
            Неверный пароль
          </div>
        </div>
      </div>
    </div>
    <div className=" col p-3 ">
      <div className="row justify-content-center">
        <button type="submit"
          // onClick={}
                className="btn button-top btn-outline-dark">
          Войти
        </button>

      </div>
    </div>
  </div>
})