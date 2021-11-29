import {runInAction} from "mobx";
import {dogsStore} from "../component/stores/DogStore";



export const deleteDogService = (id: string) => {
    const dogs = dogsStore.dogs
    const lastDog =  dogs[dogs.length - 1]
    runInAction(() => {

        for (let i = 0; i < dogs.length; i++) {
            const dog = dogs[i]
            if (dog.id === id) {
                dogs.splice(i, 1)
                break
            }
        }
    })

    lastDog.isChecked = dogs.some(dog => dog.isChecked);
}

