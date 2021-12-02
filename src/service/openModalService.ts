import {runInAction} from "mobx";
import {modalStore} from "../store/ModalStore";


export function openModalService(dogIds: Array<number>) {
  runInAction(() => {
    modalStore.dogIdsToDelete = dogIds
  })
}
