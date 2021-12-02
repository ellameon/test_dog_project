import {runInAction} from "mobx";
import {modalStore} from "../store/ModalStore";


export function setActiveIndexService(activeIndex: number) {
  runInAction(() => {
    modalStore.activeIndex = activeIndex
  })
}