import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";

export const closeModalService = () => {
    runInAction(() => {
        modalStore.isOpen = false
        modalStore.dogIdsToDelete = []
        modalStore.deleteMessage = ' '
    })
}