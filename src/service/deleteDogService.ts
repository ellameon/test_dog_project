import {runInAction} from "mobx";
import {dogsStore} from "../stores/DogStore";


export const deleteDogService = (idArray: Array<number>) => {
    runInAction(() => {
        dogsStore.dogs = dogsStore.dogs.filter(dog => !idArray.includes(dog.id));
    })


}

