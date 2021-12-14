import {ConfigStore} from "../store/ConfigStore";
import '../configuration/configuration.json'


export async function getUserTransport(): Promise<ConfigStore> {
  const response = await fetch("/src/configuration/configuration.json")
  return await response.json()


}