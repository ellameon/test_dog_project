import {observer} from "mobx-react";
import React, {ChangeEvent, useCallback, useEffect} from "react";
import {DogRecordController} from "../../../controller/DogRecordController";
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
    DogRecordController.auth()
    DogRecordController.webSocketOpen()
  }, [])

  const onChangeLogin = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const login = event.target.value
    DogRecordController.setLogin(login)
  }, [])

  const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    DogRecordController.setPassword(password)
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
      <div className=' col-10 align-items-center'>
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
    <div className=" row p-3 ">
        <div className="col submit-button">
          <button type="submit"
                  onClick={onSubmit}
                  className="btn button-top btn-outline-dark">
            {t("SubmitButton")}
          </button>
        </div>
        <div className="col">
          <button className="btn btn-outline-dark " type="button" id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-expanded="false" data-bs-toggle="dropdown">{t("Language")}
          </button>
          <ul className="dropdown-menu" id="dropdownMenu2">
            <li className="dropdown-item p-1">
              <button className=" btn btn-outline-secondary p-1" onClick={() => cLanguage("ru")}>RU</button>
            </li>
            <li className="dropdown-item p-1">
              <button className=" btn btn-outline-secondary p-1" onClick={() => cLanguage("en")}>EN</button>
            </li>
          </ul>
        </div>
      </div>
  </div>
})