import {User} from "./UserStore";
import {observable} from "mobx";


export interface ConfigStore {
  users: Array<User>,
  dogUrl: string
}

export const configStore = observable<ConfigStore>({
  users: [],
  dogUrl: ''
})