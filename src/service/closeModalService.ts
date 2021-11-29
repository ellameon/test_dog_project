import {runInAction} from "mobx";
import {modalStore} from "../component/stores/ModalStore";


export const closeModalService = () => {
    runInAction(() => {
        modalStore.isOpen = false
        modalStore.onDeleteDog = () => {
        }
    })
}