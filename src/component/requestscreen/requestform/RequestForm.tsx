import {observer} from "mobx-react";
import "./RequestForm.scss"
import {useTranslation} from "react-i18next";
import React, {ChangeEvent, useCallback} from "react";
import {DogRecordController} from "../../../controller/DogRecordController";
import {Pagination} from "../pagination/Pagination";
import {dogRequestStore} from "../../../store/DogRecordRequestStore";
import {DogsForRequest} from "../dogsforrequest/DogsForRequest";
import {AlertTab} from "../../alerttab/AlertTab";
import {sendDogOrderToServerService} from "../../../service/websocketservice/sendDogOrderToServerService";
import {webSocketStore} from "../../../store/webSocketStore";
import {dogRequestOrderStore} from "../../../store/DogRecordRequestOrderStore";


export const RequestForm = observer(function RequestForm() {

  const {t} = useTranslation()

  const socket: boolean = webSocketStore.isWebSocketOpen
  const order: boolean = dogRequestOrderStore.isFilled
  const alertText = (socket && order) ? t("RequestScreen.orderStatus")
    : t("AlertTab.disconnect")
  const alertClass = (socket) ? "alert alert-secondary alert-tab" : "alert alert-danger alert-tab"

  const pagination = dogRequestStore.pagesToShow !== undefined ? <Pagination/> : <div/>

  const onChangeSurname = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const surname = event.target.value
    DogRecordController.setSurname(surname)
  }, [])
  const onChangeFirstName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const firstName = event.target.value
    DogRecordController.setFirstName(firstName)
  }, [])
  const onChangeSecondName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const secondName = event.target.value
    DogRecordController.setSecondName(secondName)
  }, [])
  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value
    DogRecordController.setEmail(email)
  }, [])
  const onChangePhone = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const phone = event.target.value
    DogRecordController.setPhone(phone)
  }, [])
  const onChangeCountry = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const country = event.target.value
    DogRecordController.setCountry(country)
  }, [])
  const onChangeCity = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const city = event.target.value
    DogRecordController.setCity(city)
  }, [])
  const onChangeStreet = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const street = event.target.value
    DogRecordController.setStreet(street)
  }, [])
  const onChangeHouse = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const house = event.target.value
    DogRecordController.setHouse(house)
  }, [])
  const onChangeApartment = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const apartment = event.target.value
    DogRecordController.setApartment(apartment)
  }, [])
  const onSendOrder = useCallback(() => {
    DogRecordController.orderAlertShow()
    sendDogOrderToServerService()
    DogRecordController.alertShow()
  }, [])


  return <div>
    <div className="request">
      <div className='row p-2'>
        <div className='request-header  text-center'>
          {t("RequestScreen.chooseDog")}
        </div>
      </div>
      <div className='card'>
      </div>
      <div className='text-center p-1'>
        {t("RequestScreen.RequestClient.clientInfo")}
      </div>
      <div className='row pt-1'>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="surName">{t("RequestScreen.RequestClient.surname")}</label>
              <input className='form-control'
                     type="text"
                     id="surName"
                     onChange={onChangeSurname}
                     name="surName"/>
            </div>
          </form>
        </div>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="name">{t("RequestScreen.RequestClient.firstName")}</label>
              <input className='form-control'
                     type="text"
                     id="name"
                     onChange={onChangeFirstName}
                     name="name"/>
            </div>
          </form>
        </div>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="secondName">{t("RequestScreen.RequestClient.secondName")}</label>
              <input className='form-control'
                     type="text"
                     id="secondName"
                     onChange={onChangeSecondName}
                     name="secondName"/>
            </div>
          </form>
        </div>
      </div>
      <div className='row pt-1 pb-4'>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="email">{t("RequestScreen.RequestClient.email")}</label>
              <input className='form-control'
                     type="text"
                     id="email"
                     onChange={onChangeEmail}
                     name="email"/>
            </div>
          </form>
        </div>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="phone">{t("RequestScreen.RequestClient.phone")}</label>
              <input className='form-control'
                     type="text"
                     id="phone"
                     onChange={onChangePhone}
                     name="phone"/>
            </div>
          </form>
        </div>
      </div>
      <div className='card '>
      </div>
      <div className='text-center pt-1'>
        {t("RequestScreen.RequestAddress.requestAddress")}
      </div>
      <div className='row pt-1'>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="country">{t("RequestScreen.RequestAddress.country")}</label>
              <input className='form-control'
                     type="text"
                     id="country"
                     onChange={onChangeCountry}
                     name="country"/>
            </div>
          </form>
        </div>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="city">{t("RequestScreen.RequestAddress.city")}</label>
              <input className='form-control'
                     type="text"
                     id="city"
                     onChange={onChangeCity}
                     name="city"/>
            </div>
          </form>
        </div>
      </div>
      <div className='row pt-1 pb-3'>
        <div className='col'>
          <form>
            <div>
              <label className='ps-3' htmlFor="street">{t("RequestScreen.RequestAddress.street")}</label>
              <input className='form-control'
                     type="text"
                     id="street"
                     onChange={onChangeStreet}
                     name="street"/>
            </div>
          </form>
        </div>
        <div className='col-2 '>
          <form>
            <div>
              <label className='ps-3' htmlFor="house">{t("RequestScreen.RequestAddress.house")}</label>
              <input className='form-control'
                     type="text"
                     id="house"
                     onChange={onChangeHouse}
                     name="house"/>
            </div>
          </form>
        </div>
        <div className='col-2 '>
          <form>
            <div>
              <label className='ps-3' htmlFor="apartment">{t("RequestScreen.RequestAddress.apartment")}</label>
              <input className='form-control'
                     type="text"
                     id="apartment"
                     onChange={onChangeApartment}
                     name="apartment"/>
            </div>
          </form>
        </div>
      </div>
      <div className='row  text-center'>
        <div className='card'>
        </div>
        <div className='text-center p-1'>
          {t("RequestScreen.chooseDog")}
        </div>
        <DogsForRequest/>
        {pagination}
        <div className='p-2'>
          <button className='btn btn-outline-dark order-button'
                  onClick={onSendOrder}> {t("RequestScreen.orderButton")} </button>
        </div>
        <AlertTab alertText={alertText} alertClass={alertClass}/>
      </div>
    </div>
  </div>
})