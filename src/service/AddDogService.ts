import {Dog} from "../model/Dog";
import {dogsStore} from "../component/stores/dogStore";
import * as url from "url";
import {toJS} from "mobx";


export const AddDog = async () => {

    let url = "https://dog.ceo/api/breeds/image/random"

    let response = await fetch(url)
    let dog = await toJS(response.json())


    const newDog: Dog = {
        id: (parseInt(dogsStore.lastDogId) + 1).toString(),
        message: dog.message,
        status: dog.status

    }
    const newDogArray = dogsStore.dogs
    newDogArray.push(newDog)
    dogsStore.dogs = newDogArray
    dogsStore.lastDogId = newDog.id
    console.log(dogsStore.dogs[dogsStore.dogs.length - 1].id)
}