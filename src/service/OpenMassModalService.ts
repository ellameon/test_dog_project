import {runInAction} from "mobx";
import {ModalStore} from "../component/stores/ModalStore";

export const OpenMassModalService =
    () => {
        runInAction(() => {
            ModalStore.isOpen = true
            ModalStore.isMultiDelete = true
        })
    }