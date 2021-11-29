import {runInAction} from "mobx";
import {dogsStore} from "../component/stores/DogStore";


export const changeIsCheckedService = (id: string) => {
    const dogs = dogsStore.dogs

    runInAction(() => {
        for (let i = 0; i < dogs.length; i++) {
            const dog = dogsStore.dogs[i]
            if (dog.id === id) {
                dogs[i].isChecked = !dogs[i].isChecked
            }
        }
    })
}