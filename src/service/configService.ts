import {getUserTransport} from "../transport/getUserTransport";
import {runInAction} from "mobx";
import {configStore} from "../store/ConfigStore";


export async function configService() {

  const config = await getUserTransport()
  runInAction(() => {
  if ("users" in config) {
    configStore.users = config.users
  }
  if ("url" in config) {
    configStore.url = config.url
  }
  })
}