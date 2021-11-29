import {runInAction} from "mobx";
import {modalStore} from "../component/stores/ModalStore";


export const openModalService =
    (onDeleteDog: () => void, deleteMessage: string) => {
        runInAction(() => {
            modalStore.isOpen = true
            modalStore.onDeleteDog = onDeleteDog
            modalStore.deleteMessage = deleteMessage
            modalStore.isMultiDelete = false
        })
    }