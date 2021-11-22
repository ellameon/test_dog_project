import {Dog} from "../../model/Dog";
import {observable} from "mobx";

export interface DogStore {
    dogs: Array<Dog>,
    lastDogId: string
}

const defaultDog: Dog = {
    id: "1",
    message: "https://images.dog.ceo/breeds/setter-english/n02100735_861.jpg",
    status: "success"
}

export const dogsStore = observable<DogStore> ({
    dogs: [defaultDog],
    lastDogId: "1"
})