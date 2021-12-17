import {observable} from "mobx";


export interface ModalStore {
  dogIdsToDelete: Array<number>
  activeIndex: number
}

export const modalStore = observable<ModalStore>({
  dogIdsToDelete: [],
  activeIndex: 0
})