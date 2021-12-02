import {Dog} from "../model/Dog";
import {dogsStore} from "../store/DogStore";
import {getDogTransport} from "../transport/getDogTransport";
import {addDogService} from "./addDogService";

export const changeDogService = () => {
  getDogTransport().then((dogDto) => {
    const dog = dogDtoToDog(dogDto);
    addDogService(dog)
  })
}

function dogDtoToDog(dogDto: any): Dog {
  return {
    id: dogsStore.lastDogId + 1,
    url: dogDto.message,
    status: dogDto.status,
  }
}
