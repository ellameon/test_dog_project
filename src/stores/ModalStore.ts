import {observable} from "mobx";

export interface ModalStore {
    isOpen: boolean
    dogIdsToDelete: Array<number>
    deleteMessage: string
    activeIndex: number
}

export const modalStore = observable<ModalStore>({
    isOpen: false,
    dogIdsToDelete: [],
    deleteMessage: '',
    activeIndex: 0
})