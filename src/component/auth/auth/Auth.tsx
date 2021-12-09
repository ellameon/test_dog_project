import {observer} from "mobx-react";
import React, {ChangeEvent, useCallback} from "react";
import {DogController} from "../../../controller/DogController";
import {userStore} from "../../../store/UserStore";


export const Auth = observer(function Auth() {

  const {
    login,
    password
  } = userStore

  const onSubmit = useCallback(() => {
    DogController.getUser(login,password)
  }, [login, password])

  const onChangeLogin = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const login = event.target.value
    DogController.setLogin(login)
  }, [])

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    DogController.setPassword(password)
  }, [])


  return <div className="justify-content-center main-image-container">
    <div className="row pt-3  justify-content-center">
      <div className=' col-7 align-items-center'>
        <div>
          <label htmlFor="validationLogin"
                 className="form-label">Login</label>
          <input type="text"
                 className="form-control"
                 autoComplete={"off"}
                 id="validationLogin"
                 value={login}
                 onChange={onChangeLogin}
                 required={true}/>
          <div className="valid-feedback">
            Все хорошо!
          </div>
          <div className="invalid-feedback">
            Неверный логин
          </div>
          <label htmlFor="validationPassword"
                 className="form-label">Password</label>
          <input type="password"
                 className="form-control"
                 autoComplete='off'
                 id="validationPassword"
                 value={password}
                 onChange={onChangePassword}
                 required={true}/>
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
                onClick={onSubmit}
                className="btn button-top btn-outline-dark">
          Войти
        </button>

      </div>
    </div>
  </div>
})