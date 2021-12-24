import {Dog} from "../../model/Dog";
import {dogsStore} from "../../store/DogStore";
import {getDogTransport} from "../../transport/getDogTransport";
import {addDogToStoreService} from "./addDogToStoreService";
import {DogDto} from "../../model/DogDto";
import {DogDtoToDataBase} from "../../model/DogDtoToDataBase";
import {saveDogToDataBaseService} from "../databaseservice/saveDogToDataBaseService";
import {fillJournalStoreFromDataBaseService} from "../databaseservice/fillJournalStoreFromDataBaseService";
import {setDateRangeService} from "../databaseservice/setDateRangeService";


export async function getDogFromServerService(): Promise<void> {

  await getDogTransport().then((dogDto) => {
    const dog = convertDogDtoToDog(dogDto);
    const dogDtoToDataBase = convertDogDtoToDogDbDto(dogDto)
    fillJournalStoreFromDataBaseService(setDateRangeService())
    addDogToStoreService(dog)
    saveDogToDataBaseService(dogDtoToDataBase)
  })
}

function convertDogDtoToDog(dogDto: DogDto): Dog {
  return {
    id: dogsStore.lastDogId + 1,
    url: dogDto.message,
    status: dogDto.status,
  }
}

function convertDogDtoToDogDbDto(dogDto: DogDto): DogDtoToDataBase {
  const dogAddDate = new Date()
  return {
    date: dogAddDate,
    url: dogDto.message,
  }
}
