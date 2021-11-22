import {observable} from "mobx";

interface AddDogStore {
    id: string
    message: string
    status: string
}

export const AddDogStore = observable<AddDogStore> ({
    id: "0",
    message: "",
    status: ""
})