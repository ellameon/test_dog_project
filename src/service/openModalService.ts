import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";


export function openModalService(onDeleteDog: () => void, deleteMessage: string) {
    runInAction(() => {
        modalStore.isOpen = true
        modalStore.onDeleteDog = onDeleteDog
        modalStore.deleteMessage = deleteMessage
    })
}