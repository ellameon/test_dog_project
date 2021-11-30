import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";

export function openMassModalService() {
    runInAction(() => {
        modalStore.isOpen = true
    })
}