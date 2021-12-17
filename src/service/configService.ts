import {getUserTransport} from "../transport/getUserTransport";
import {configStore} from "../store/ConfigStore";
import {runInAction} from "mobx";


export async function configService() {

  await getUserTransport().then((result) => {

    const config = result;

    runInAction(() => {
      configStore.users = config.users
      configStore.dogUrl = config.dogUrl
    })
  })
}