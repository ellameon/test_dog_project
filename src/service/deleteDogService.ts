import {runInAction} from "mobx";
import {dogsStore} from "../component/stores/DogStore";
import {DefaultDogStore} from "../component/stores/DefaultDogStore";


export const deleteDogService = (id: string) => {

    runInAction(() => {

        for (let i = 0; i < dogsStore.dogs.length; i++) {
            const dog = dogsStore.dogs[i]
            if (dog.id === id) {
                dogsStore.dogs.splice(i, 1)
                break
            }
        }
    })
    if (dogsStore.dogs.length < 1) {
        DefaultDogStore.message = "https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg"
    }

    DefaultDogStore.isChecked = dogsStore.dogs.some(dog => dog.isChecked);
}

