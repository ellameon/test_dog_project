export function setDogRecordsToDataBaseTransport(key: string, dataJSON: string): void {

  localStorage.setItem(key, dataJSON)
}