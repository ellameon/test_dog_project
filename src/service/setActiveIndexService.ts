import {runInAction} from "mobx";
import {modalStore} from "../store/ModalStore";


export function setActiveIndexService(activeIndex: number): void {
  runInAction(() => {
    modalStore.activeIndex = activeIndex
  })
}