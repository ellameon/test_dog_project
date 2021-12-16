import {observer} from "mobx-react";
import React, {ChangeEvent, useCallback, useEffect} from "react";
import {DogController} from "../../../controller/DogController";
import {authStore} from "../../../store/AuthStore";
import {useTranslation} from "react-i18next";


export const Auth = observer(function Auth() {

  const {
    login,
    password,
  } = authStore

  const isError = authStore.isError

  const {t, i18n} = useTranslation();
  const cLanguage = (language: string) => {
    i18n.changeLanguage(language).then();
  };

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
                 className="form-label">{t("Auth.user")}</label>
          <input type="text"
                 className="form-control"
                 autoComplete={"off"}
                 id="validationLogin"
                 value={login}
                 onChange={onChangeLogin}
                 required={true}/>
          <label htmlFor="validationPassword"
                 className="form-label mt-2">{t("Auth.password")}</label>
          <input type="password"
                 className="form-control"
                 autoComplete='off'
                 id="validationPassword"
                 value={password}
                 onChange={onChangePassword}
                 required={true}/>
          {isError && (<div className='invalid-auth'>
            {t("Auth.error")}
          </div>)}
        </div>
      </div>
    </div>
    <div className=" col p-3 ">
      <div className="row justify-content-center">
        <button type="submit"
                onClick={onSubmit}
                className="btn button-top btn-outline-dark">
          {t("SubmitButton")}
        </button>
        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
                aria-expanded="false">
        </button>
        <div className="dropdown">
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" onClick={() => cLanguage("ru")} type="button">RU</button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => cLanguage("en")} type="button">EN</button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
})