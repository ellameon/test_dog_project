import {observable} from "mobx";

export interface OrderValidationStore {
  defaultCheck: boolean
  isSurnameValid: boolean
  isEmailValid: boolean
  isPhoneValid: boolean
  isCityValid: boolean
  isStreetValid: boolean
  isHouseValid: boolean
  isDogRecordChoosed: boolean
}

export const orderValidationStore = observable<OrderValidationStore>({
  defaultCheck: false,
  isSurnameValid: true,
  isEmailValid: true,
  isPhoneValid: true,
  isCityValid: true,
  isStreetValid: true,
  isHouseValid: true,
  isDogRecordChoosed: true
})