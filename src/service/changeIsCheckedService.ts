import {runInAction} from "mobx";
import {dogsStore} from "../component/stores/dogStore";
import {DefaultDogStore} from "../component/stores/DefaultDogStore";


export const changeIsCheckedService = (id: string) => {

    runInAction(() => {
        for (let i = 0; i < dogsStore.dogs.length; i++) {
            const dog = dogsStore.dogs[i]
            if (dog.id === id) {
                dogsStore.dogs[i].isChecked = !dogsStore.dogs[i].isChecked
                if (dogsStore.dogs.some(dog => dog.isChecked)) {
                    DefaultDogStore.isChecked = true
                } else {
                    DefaultDogStore.isChecked = false
                }
            }
        }
    })
}