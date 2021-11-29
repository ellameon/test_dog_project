import {runInAction} from "mobx";
import {modalStore} from "../component/stores/ModalStore";

export const openMassModalService =
    () => {
        runInAction(() => {
            modalStore.isOpen = true
            modalStore.isMultiDelete = true
        })
    }