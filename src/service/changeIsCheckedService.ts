import {runInAction} from "mobx";
import {checkedDogsStore} from "../stores/CheckedDogsStore";


export const toggleCheckedDogService = (toggleId: number) => {

    runInAction(() => {
        if (checkedDogsStore.checkedDogs.includes(toggleId)) {
            checkedDogsStore.checkedDogs = checkedDogsStore.checkedDogs.filter(id => id !== toggleId)
        } else {
            checkedDogsStore.checkedDogs.push(toggleId)
        }
    })
}