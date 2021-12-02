import {observable} from "mobx";

export interface ModalStore {
  dogIdsToDelete: Array<number>
  deleteMessage: string
  activeIndex: number
}

export const modalStore = observable<ModalStore>({
  dogIdsToDelete: [],
  deleteMessage: '',
  activeIndex: 0
})