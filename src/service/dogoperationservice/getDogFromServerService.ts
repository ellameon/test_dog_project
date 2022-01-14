import {Dog} from "../../model/Dog";
import {dogsStore} from "../../store/DogStore";
import {getDogTransport} from "../../transport/getDogTransport";
import {addDogToStoreService} from "./addDogToStoreService";
import {DogDto} from "../../model/DogDto";
import {saveDogToDataBaseService} from "../databaseservice/saveDogToDataBaseService";


export async function getDogFromServerService(): Promise<void> {

  await getDogTransport().then((dogDto) => {
    const dog = convertDogDtoToDog(dogDto);
    addDogToStoreService(dog)
    saveDogToDataBaseService(dog)
  })
}

function convertDogDtoToDog(dogDto: DogDto): Dog {
  return {
    id: dogsStore.lastDogId + 1,
    url: dogDto.message,
    status: dogDto.status,
    date: new Date(),
  }
}

