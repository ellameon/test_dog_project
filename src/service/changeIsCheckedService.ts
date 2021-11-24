import {runInAction} from "mobx";
import {dogsStore} from "../component/stores/dogStore";


export const changeIsCheckedService = (id: string) => {

    runInAction(() => {
        for (let i = 0; i < dogsStore.dogs.length; i++) {
            const dog = dogsStore.dogs[i]
            if (dog.id === id) {
                dogsStore.dogs[i].isChecked = true
                break
            }
        }
    })
}