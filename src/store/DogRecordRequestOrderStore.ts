import {observable} from "mobx";

export interface DogRecordRequestOrderStore {
  surname: string
  firstName: string
  secondName:  string
  email: string
  phone: string
  country: string
  city: string
  street: string
  house: string
  apartment: string
  choosedDogId: number
  choosedDogUrl: string
}

export const dogRequestOrderStore = observable<DogRecordRequestOrderStore>({
  surname: '',
  firstName: '',
  secondName:  '',
  email: '',
  phone: '',
  country: '',
  city: '',
  street: '',
  house: '',
  apartment: '',
  choosedDogId: 0,
  choosedDogUrl: '',
})