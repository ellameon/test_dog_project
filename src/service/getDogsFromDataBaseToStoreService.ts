import {dogDataBaseStore} from "../store/DogDataBaseStore";
import {getDogsFromDataBaseService} from "./getDogsFromDataBaseService";


export function getDogsFromDataBaseToStoreService(): void {

  const dogsFromDataBase = getDogsFromDataBaseService()

  if (dogsFromDataBase !== undefined) {
    const lastDogFromDataBase = dogsFromDataBase[dogsFromDataBase.length - 1]

    dogDataBaseStore.dogsToDataBase = dogsFromDataBase
    dogDataBaseStore.dogsToDataBaseLastId = lastDogFromDataBase.id
    console.log(dogDataBaseStore.dogsToDataBaseLastId)
  }
}