import {observable} from "mobx";


export interface ModalStore {
    isOpen: boolean
    onDeleteDog: () => void
    deleteMessage: string
    isMultiDelete: boolean
}

export const modalStore = observable<ModalStore>({
    isOpen: false,
    onDeleteDog: () => {},
    deleteMessage: '',
    isMultiDelete: true
})