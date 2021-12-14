import {DogDto} from "../model/DogDto";


export async function getDogTransport(url: string): Promise<DogDto> {
  const response = await fetch(url)
  return await response.json()
}

