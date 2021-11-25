import {runInAction} from "mobx";
import {dogsStore} from "../component/stores/dogStore";
import {DefaultDogStore} from "../component/stores/DefaultDogStore";
import {ModalStore} from "../component/stores/ModalStore";


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
    ModalStore.isMultiDelete = true
    if (dogsStore.dogs.some(dog => dog.isChecked)) {
        DefaultDogStore.isChecked = true
    } else {
        DefaultDogStore.isChecked = false
    }
}

