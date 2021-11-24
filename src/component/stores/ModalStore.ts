import {observable} from "mobx";


export interface modalStore {
    isOpen: boolean
    onDeleteDog: () => void
    deleteMessage: string
}

export const ModalStore = observable<modalStore>({
    isOpen: false,
    onDeleteDog: () => {},
    deleteMessage: ''
})