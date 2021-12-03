import {runInAction} from "mobx";
import {modalStore} from "../store/ModalStore";


export function closeModalService(): void {
  runInAction(() => {
    modalStore.dogIdsToDelete = []
    modalStore.activeIndex = 0
  })
}