import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";


export const confirmedDeleteDogService = () => {
    runInAction(() => {
        modalStore.onDeleteDog()
    })
}