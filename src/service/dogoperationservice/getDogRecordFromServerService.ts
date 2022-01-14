import {Dog} from "../../model/Dog";
import {dogsStore} from "../../store/DogRecordsStore";
import {getDogRecordTransport} from "../../transport/getDogRecordTransport";
import {addDogRecordToStoreService} from "./addDogRecordToStoreService";
import {DogDto} from "../../model/DogDto";
import {saveDogRecordToDataBaseService} from "../databaseservice/saveDogRecordToDataBaseService";


export async function getDogRecordFromServerService(): Promise<void> {

  await getDogRecordTransport().then((dogDto) => {
    const dog = convertDogDtoToDog(dogDto);
    addDogRecordToStoreService(dog)
    saveDogRecordToDataBaseService(dog)
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

