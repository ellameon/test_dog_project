import {Dog} from "../model/Dog";
import {dogsStore} from "../component/stores/dogStore";
import {BackRequest} from "../transport/backRequest";
import {DefaultDogStore} from "../component/stores/DefaultDogStore";


export const AddDogService = () => {

    BackRequest().then((dogFromServer) => {
        const newDog: Dog = {
            id: (parseInt(dogsStore.lastDogId) + 1).toString(),
            message: dogFromServer.message,
            status: dogFromServer.status,
            isChecked: false
        }

        DefaultDogStore.message = dogFromServer.message
        dogsStore.dogs.push(newDog)
        dogsStore.lastDogId = newDog.id
        console.log(dogsStore.dogs[dogsStore.dogs.length - 1].id)
    })
}