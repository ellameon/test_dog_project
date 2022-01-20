import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";
import {orderValidationStore} from "../../store/OrderValidationStore";
import {runInAction} from "mobx";


export function checkIsOrderValidService(): boolean {

  let isValid = true
  runInAction(() => {
    isValid = isEmailValid() && isValid
    isValid = isPhoneValid() && isValid
    isValid = isSurnameValid() && isValid
    isValid = isCityValid() && isValid
    isValid = isStreetValid() && isValid
    isValid = isHouseValid() && isValid
    isValid = isDogRecordChoosed() && isValid

    orderValidationStore.defaultCheck = true
  })
  return isValid
}

function isEmailValid() {
  if (!dogRequestOrderStore.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && dogRequestOrderStore.phone.length === 0) {
    orderValidationStore.isEmailValid = false
    return false
  } else {
    orderValidationStore.isEmailValid = true
    return true
  }
}

function isPhoneValid() {
  if (!dogRequestOrderStore.phone.match(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)) {
    orderValidationStore.isPhoneValid = false
    return false
  } else {
    orderValidationStore.isPhoneValid = true
    return true
  }
}

function isCityValid(): boolean {
  if (dogRequestOrderStore.city.length === 0 || dogRequestOrderStore.city.length > 50) {
    orderValidationStore.isCityValid = false
    return false
  } else {
    orderValidationStore.isCityValid = true
    return true
  }
}

function isSurnameValid(): boolean {
  if (dogRequestOrderStore.surname.length === 0 || dogRequestOrderStore.surname.length > 50) {
    orderValidationStore.isSurnameValid = false
    return false
  } else {
    orderValidationStore.isSurnameValid = true
    return true
  }

}

function isStreetValid(): boolean {
  if (dogRequestOrderStore.street.length === 0 || dogRequestOrderStore.street.length > 70) {
    orderValidationStore.isStreetValid = false
    return false
  } else {
    orderValidationStore.isStreetValid = true
    return true
  }
}

function isHouseValid(): boolean {
  if (dogRequestOrderStore.house.length === 0 || dogRequestOrderStore.house.length > 5) {
    orderValidationStore.isHouseValid = false
    return false
  } else {
    orderValidationStore.isHouseValid = true
    return true
  }
}

function isDogRecordChoosed(): boolean {
  if (dogRequestOrderStore.choosedDogId === 0) {
    orderValidationStore.isDogRecordChoosed = false
    return false
  } else {
    orderValidationStore.isDogRecordChoosed = true
    return true
  }
}