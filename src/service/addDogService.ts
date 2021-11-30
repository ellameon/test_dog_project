import {Dog} from "../model/Dog";
import {dogsStore} from "../stores/DogStore";
import {backRequest} from "../transport/backRequest";
import {runInAction} from "mobx";


export const addDogService = () => {

    runInAction(() => {
        const dogs = dogsStore.dogs
        backRequest().then((dogFromServer) => {
            const newDog: Dog = {
                id: dogsStore.lastDogId + 1,
                message: dogFromServer.message,
                status: dogFromServer.status,
            }
            dogs.push(newDog)
            dogsStore.lastDogId = newDog.id
        })
    })
}