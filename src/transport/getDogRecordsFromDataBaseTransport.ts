export function getDogRecordsFromDataBaseTransport(key: string): string | null{

  return localStorage.getItem(key)
}