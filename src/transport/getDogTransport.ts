import {DogDto} from "../model/DogDto";


export async function getDogTransport(): Promise<DogDto> {
  const url = "https://dog.ceo/api/breeds/image/random"
  const response = await fetch(url)
  return await response.json()
}

