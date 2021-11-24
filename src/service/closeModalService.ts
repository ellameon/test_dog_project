import {runInAction} from "mobx";
import {ModalStore} from "../component/stores/ModalStore";


export const closeModalService = () => {
    runInAction(() => {
        ModalStore.isOpen = false
        ModalStore.onDeleteDog = () => {}
        ModalStore.deleteMessage = ""
    })
}