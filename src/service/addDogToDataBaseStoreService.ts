import {runInAction} from "mobx";
import {dogDataBaseStore} from "../store/DogDataBaseStore";
import {DogToDataBase} from "../model/DogToDataBase";


export function addDogToDataBaseStoreService(dogToDataBase: DogToDataBase): void {

  runInAction(() => {
    dogDataBaseStore.dogsToDataBase.push(dogToDataBase)
  })
}