import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {runInAction} from "mobx";
import {setDogRecordsToDataBaseTransport} from "../../transport/setDogRecordsToDataBaseTransport";


export function saveDogRecordsToDataBaseFromStoreService(): void {

  const dogsToDataBase = dogDataBaseStore.dogs
  const dataJSON = JSON.stringify(dogsToDataBase)

  runInAction(() => {
    const key = new Date().toLocaleDateString("ru")
    setDogRecordsToDataBaseTransport(key, dataJSON)
  })
}