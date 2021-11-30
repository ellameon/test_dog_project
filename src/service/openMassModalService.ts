import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";
import {checkedDogsStore} from "../stores/CheckedDogsStore";

export function openMassModalService() {
    runInAction(() => {
        modalStore.isOpen = true
        modalStore.dogIdsToDelete = []
        modalStore.dogIdsToDelete = modalStore.dogIdsToDelete.concat(...checkedDogsStore.checkedDogs)

    })
}
