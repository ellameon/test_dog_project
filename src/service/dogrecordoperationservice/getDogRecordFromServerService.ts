import {DogRecord} from "../../model/DogRecord";
import {dogsStore} from "../../store/DogRecordsStore";
import {getDogRecordTransport} from "../../transport/getDogRecordTransport";
import {addDogRecordToStoreService} from "./addDogRecordToStoreService";
import {DogRecordDto} from "../../model/DogRecordDto";
import {saveDogRecordToDataBaseService} from "../databaseservice/saveDogRecordToDataBaseService";


export async function getDogRecordFromServerService(): Promise<void> {

  await getDogRecordTransport().then((dogDto) => {
    const dog = convertDogDtoToDog(dogDto);
    addDogRecordToStoreService(dog)
    saveDogRecordToDataBaseService(dog)
  })
}

function convertDogDtoToDog(dogDto: DogRecordDto): DogRecord {
  return {
    id: dogsStore.lastDogId + 1,
    url: dogDto.message,
    status: dogDto.status,
    date: new Date(),
  }
}

