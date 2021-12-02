import {runInAction} from "mobx";
import {modalStore} from "../stores/ModalStore";


export function setActiveIndexService(activeIndex: number) {
    runInAction(() => {
        modalStore.activeIndex = activeIndex
    })
}