import {Dog} from "../../model/Dog";
import {observable} from "mobx";


export interface DogStore {
    dogs: Array<Dog>,
    lastDogId: string,
}

export const dogsStore = observable<DogStore>({
    dogs: [],
    lastDogId: "0",
})