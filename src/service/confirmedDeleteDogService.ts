import {runInAction} from "mobx";

import {dogsStore} from "../stores/DogStore";
import {modalStore} from "../stores/ModalStore";
import {checkedDogsStore} from "../stores/CheckedDogsStore";


export const confirmedDeleteDogService = () => {
    runInAction(() => {

        dogsStore.dogs = dogsStore.dogs
            .filter(dog => !modalStore.dogIdsToDelete.includes(dog.id))
        checkedDogsStore.checkedDogs = checkedDogsStore.checkedDogs
            .filter(id => !modalStore.dogIdsToDelete.includes(id))
        modalStore.dogIdsToDelete.length = 0
        modalStore.deleteMessage = ''
    })
}
