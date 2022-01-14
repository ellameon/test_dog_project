import {Dog} from "../../model/Dog";
import {getDogRecordsFromDataBaseTransport} from "../../transport/getDogRecordsFromDataBaseTransport";


export function selectDogRecordsFromDataBaseService(): Array<Dog> | undefined {

  const key = new Date().toLocaleDateString("ru")

  let dogsFromData = getDogRecordsFromDataBaseTransport(key)
  let dogsFromDataBase;

  if (dogsFromData !== null) {
    dogsFromDataBase = JSON.parse(dogsFromData)
  }
  return dogsFromDataBase
}