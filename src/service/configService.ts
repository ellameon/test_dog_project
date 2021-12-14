import {getUserTransport} from "../transport/getUserTransport";
import {configStore} from "../store/ConfigStore";


export async function configService() {

  await getUserTransport().then((result) => {
    const config = result;
    configStore.users = config.users
    configStore.url = config.url
  })

}