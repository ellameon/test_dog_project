import {setUserTransport} from "../transport/setUserTransport";
import {runInAction} from "mobx";


export async function setUserService(): Promise<void>{
  runInAction(() => {
     setUserTransport()
  })
}