import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";


export function openModalService(dogIds: Array<number>) {
    runInAction(() => {
        modalStore.isOpen = true
        modalStore.dogIdsToDelete = dogIds
    })
}
