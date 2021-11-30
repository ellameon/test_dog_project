import {observable} from "mobx"


export interface CheckedDogsStore {
    checkedDogs: Array<number>
}
export const checkedDogsStore = observable<CheckedDogsStore>({
    checkedDogs: []
})