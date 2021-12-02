import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";

export const closeModalService = () => {
  runInAction(() => {
    modalStore.dogIdsToDelete = []
    modalStore.deleteMessage = ' '
    modalStore.activeIndex = 0
  })
}