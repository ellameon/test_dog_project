import {dogsStore} from "../component/stores/DogStore";
import {runInAction} from "mobx";


export const deleteCheckedDogs = () => {
    const dogs = dogsStore.dogs
    const lastDog = dogs[dogs.length - 1]

    runInAction(() => {
        for (let i = 0; i < dogsStore.dogs.length; i++) {
            dogsStore.dogs = dogsStore.dogs.filter(dog => dog.isChecked === false)
        }
        lastDog.isChecked = dogs.some(dog => dog.isChecked)
    })
    if (dogsStore.dogs.length === 0) {
        lastDog.message = "https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg"
    }
}