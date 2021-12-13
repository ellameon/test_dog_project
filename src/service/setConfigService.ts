import {setUserTransport} from "../transport/setUserTransport";
import {runInAction} from "mobx";


export async function setConfigService(): Promise<void>{
  runInAction(() => {
     setUserTransport()
  })
}