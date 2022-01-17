import {DogRecordDto} from "../model/DogRecordDto";
import {configStore} from "../store/ConfigStore";


export async function getDogRecordTransport(): Promise<DogRecordDto> {
  const url = configStore.dogUrl
  const response = await fetch(url)
  return await response.json()
}

