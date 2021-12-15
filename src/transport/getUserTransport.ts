import {ConfigStore} from "../store/ConfigStore";

export async function getUserTransport(): Promise<ConfigStore> {
  const response = await fetch("configuration/configuration.json")
  return await response.json()
}