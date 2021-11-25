import {runInAction} from "mobx";
import {ModalStore} from "../component/stores/ModalStore";


export const OpenModalService =
    (onDeleteDog: () => void, deleteMessage: string) => {
        runInAction(() => {
            ModalStore.isOpen = true
            ModalStore.onDeleteDog = onDeleteDog
            ModalStore.deleteMessage = deleteMessage
            ModalStore.isMultiDelete = false
        })
    }