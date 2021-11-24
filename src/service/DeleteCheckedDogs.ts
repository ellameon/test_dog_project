import {dogsStore} from "../component/stores/dogStore";
import {runInAction} from "mobx";
import {DefaultDogStore} from "../component/stores/DefaultDogStore";


export const DeleteCheckedDogs = () => {
    runInAction(() => {
    for (let i = 0; i < dogsStore.dogs.length; i++) {
        const dog = dogsStore.dogs[i]
        console.log(dog.isChecked)
        dogsStore.dogs = dogsStore.dogs.filter(dog => dog.isChecked === false)
    }
    DefaultDogStore.isChecked = false
})
    if (dogsStore.dogs.length < 1) {
        DefaultDogStore.message = "https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg"
    }

}