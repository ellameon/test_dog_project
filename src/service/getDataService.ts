import {runInAction} from "mobx";
import {BackRequest} from "../transport/backRequest";



export const getDataService = () => {
    runInAction(() => {
        BackRequest()

    })
}

