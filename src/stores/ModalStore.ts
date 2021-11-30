import {observable} from "mobx";


export interface ModalStore {
    isOpen: boolean
    dogIdsToDelete: Array<number>
    deleteMessage: string
}

export const modalStore = observable<ModalStore>({
    isOpen: false,
    dogIdsToDelete: [],
    deleteMessage: '',
})