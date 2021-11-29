import {Dog} from "../model/Dog";
import {dogsStore} from "../component/stores/DogStore";
import {backRequest} from "../transport/backRequest";


export const addDogService = () => {
    const dogs = dogsStore.dogs
    backRequest().then((dogFromServer) => {
        const newDog: Dog = {
            id: (parseInt(dogsStore.lastDogId) + 1).toString(),
            message: dogFromServer.message,
            status: dogFromServer.status,
            isChecked: false
        }


        dogs.push(newDog)
        dogsStore.lastDogId = newDog.id

    })
}
