import {Dog} from "../model/Dog";
import {dogsStore} from "../store/DogStore";
import {getDogTransport} from "../transport/getDogTransport";
import {addDogService} from "./addDogService";
import {DogDto} from "../model/DogDto";
import {DogToDataBase} from "../model/DogToDataBase";
import {dogDataBaseStore} from "../store/DogDataBaseStore";
import {addDogToDataBaseStoreService} from "./addDogToDataBaseStoreService";
import {setDogsToDataBaseService} from "./setDogsToDataBaseService";
import {getDogsFromDataBaseToStoreService} from "./getDogsFromDataBaseToStoreService";



export async function getDogFromServerAndAddService(): Promise<void> {

  getDogsFromDataBaseToStoreService()

  await getDogTransport().then((dogDto) => {

    const dog = dogDtoToDog(dogDto);
    const dogToDataBase = dogDtoToDogToDataBase(dogDto)
    addDogService(dog)
    addDogToDataBaseStoreService(dogToDataBase)
    setDogsToDataBaseService()
  })
}

function dogDtoToDog(dogDto: DogDto): Dog {
  return {
    id: dogsStore.lastDogId + 1,
    url: dogDto.message,
    status: dogDto.status,
  }
}

function dogDtoToDogToDataBase(dogDto: DogDto): DogToDataBase {
  const dogAddDate = new Date()
  return {
    date: dogAddDate,
    id: dogDataBaseStore.dogsToDataBaseLastId + 1,
    url: dogDto.message,
  }
}
