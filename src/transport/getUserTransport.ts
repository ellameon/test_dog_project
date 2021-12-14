import {ConfigStore} from "../store/ConfigStore";
import '../configuration/configuration.json'


export async function getUserTransport(): Promise<ConfigStore> {

  return await fetch("http://localhost:3000/home/milyukov/IdeaProjects/test_dog_project/src/configuration/configuration.json")
    .then(res => res.json())
    .then(
      (result) => JSON.parse(result)
    )
}