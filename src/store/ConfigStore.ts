import {User} from "./UserStore";
import {observable} from "mobx";

export interface ConfigStore {
  users: Array<User>,
  url: string
}

export const configStore = observable<ConfigStore>({
  users: [],
  url: ''
})