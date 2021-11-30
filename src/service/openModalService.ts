import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";


export function openModalService(dogIds: Array<number>, deleteMessage: string) {
    runInAction(() => {
        modalStore.isOpen = true
        modalStore.dogIdsToDelete = dogIds
        modalStore.deleteMessage = deleteMessage

    })
}

