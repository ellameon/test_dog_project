import {observer} from "mobx-react";
import React, {ChangeEvent, useCallback, useEffect} from "react";
import {DogController} from "../../../controller/DogController";
import {authStore} from "../../../store/AuthStore";


export const Auth = observer(function Auth() {

  const {
    login,
    password,
  } = authStore

  const isError = authStore.isError

  const onSubmit = useCallback(() => {
    DogController.auth()
  }, [])

  const onChangeLogin = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const login = event.target.value
    DogController.setLogin(login)
  }, [])

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    DogController.setPassword(password)
  }, [])

  useEffect(() => {
    const listener = (event: { code: string; }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        onSubmit()
      }
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onSubmit]);

  return <div className="justify-content-center">
    <div className="row pt-3  justify-content-center">
      <div className=' col-9 align-items-center'>
        <div>
          <label htmlFor="validationLogin"
                 className="form-label">Пользователь</label>
          <input type="text"
                 className="form-control"
                 autoComplete={"off"}
                 id="validationLogin"
                 value={login}
                 onChange={onChangeLogin}
                 required={true}/>
          <label htmlFor="validationPassword"
                 className="form-label mt-2">Пароль</label>
          <input type="password"
                 className="form-control"
                 autoComplete='off'
                 id="validationPassword"
                 value={password}
                 onChange={onChangePassword}
                 required={true}/>
          {isError && (<div className='invalid-auth'>
            Неверная пара логин/пароль
          </div>)}
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