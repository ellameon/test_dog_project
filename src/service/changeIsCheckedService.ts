import {runInAction} from "mobx";
import {checkedDogsStore} from "../stores/CheckedDogsStore";


export const toggleCheckedDog = (id: number) => {

    runInAction(() => {
        const indexOfId = checkedDogsStore.checkedDogs.indexOf(id)
        if (indexOfId >= 0) {
            checkedDogsStore.checkedDogs = checkedDogsStore.checkedDogs.splice(indexOfId, 1)
        } else {
            checkedDogsStore.checkedDogs.push(id)
        }
    })
}