import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";
import {orderValidationStore} from "../../store/OrderValidationStore";
import {runInAction} from "mobx";


export function checkIsOrderValidService(): void {

  runInAction(() => {

    if (isEmailValid()
      && isPhoneValid()
      && isSurnameValid()
      && isCityValid()
      && isStreetValid()
      && isHouseValid()) {

      orderValidationStore.isOrderValid = true
    }
      })
}


function isEmailValid() {
  if (!dogRequestOrderStore.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    orderValidationStore.isEmailValid = false
    return false
  }
  return true
}

function isPhoneValid() {
  if (!dogRequestOrderStore.phone.match(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)) {
    orderValidationStore.isPhoneValid = false
    return false
  }
  return true
}

function isCityValid() {

  if (dogRequestOrderStore.city.length === 0) {
    orderValidationStore.isCityValid = false
  }
  if (dogRequestOrderStore.city.length > 50) {
    orderValidationStore.isCityValid = false
  }
  return true
}

function isSurnameValid() {

  if (dogRequestOrderStore.surname.length === 0) {
    orderValidationStore.isSurnameValid = false
  }
  if (dogRequestOrderStore.surname.length > 100) {
    orderValidationStore.isSurnameValid = false
  }
  return true
}

function isStreetValid() {

  if (dogRequestOrderStore.street.length === 0) {
    orderValidationStore.isStreetValid = false
  }
  if (dogRequestOrderStore.surname.length > 100) {
    orderValidationStore.isSurnameValid = false
  }
  return true
}

function isHouseValid() {

  if (dogRequestOrderStore.house.length === 0) {
    orderValidationStore.isHouseValid = false
  }
  if (dogRequestOrderStore.surname.length > 5) {
    orderValidationStore.isSurnameValid = false
  }
  return true
}