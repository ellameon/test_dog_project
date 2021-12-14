import {Dog} from "../model/Dog";
import {dogsStore} from "../store/DogStore";
import {getDogTransport} from "../transport/getDogTransport";
import {addDogService} from "./addDogService";
import {DogDto} from "../model/DogDto";


export async function getDogFromServerAndAddService(url:string): Promise<void> {
  console.log(url)
  await getDogTransport(url).then((dogDto) => {
    const dog = dogDtoToDog(dogDto);
    addDogService(dog)
  })
}

function dogDtoToDog(dogDto: DogDto): Dog {
  return {
    id: dogsStore.lastDogId + 1,
    url: dogDto.message,
    status: dogDto.status,
  }
}
