import {observable} from "mobx";


export interface modalStore {
    isOpen: boolean
    onDeleteDog: () => void
    deleteMessage: string
    isMultiDelete: boolean
}

export const ModalStore = observable<modalStore>({
    isOpen: false,
    onDeleteDog: () => {},
    deleteMessage: '',
    isMultiDelete: true
})