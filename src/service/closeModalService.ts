import {runInAction} from "mobx";
import {modalStore} from "../store/ModalStore";

export const closeModalService = () => {
  runInAction(() => {
    modalStore.dogIdsToDelete = []
    modalStore.activeIndex = 0
  })
}