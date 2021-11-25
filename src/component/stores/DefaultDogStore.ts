import {observable} from "mobx";

export interface AddDogStore {
    id: string
    message: string
    status: string
    isChecked: boolean
}

export const DefaultDogStore = observable<AddDogStore>({
    id: "Нет данных",
    message: "https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg",
    status: 'Нет данных',
    isChecked: false,

})