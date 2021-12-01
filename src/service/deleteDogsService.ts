import {runInAction} from "mobx";

import {dogsStore} from "../stores/DogStore";
import {modalStore} from "../stores/ModalStore";
import {checkedDogsStore} from "../stores/CheckedDogsStore";


export const deleteDogsService = () => {
  runInAction(() => {
    deleteDogs()
    updateCheckedDogs()
    clearModalStore()
  })
}

function deleteDogs() {
  dogsStore.dogs = dogsStore.dogs
    .filter(dog => !modalStore.dogIdsToDelete.includes(dog.id))
}

function updateCheckedDogs() {
  checkedDogsStore.checkedDogs = checkedDogsStore.checkedDogs
    .filter(id => !modalStore.dogIdsToDelete.includes(id))
}

function clearModalStore() {
  modalStore.dogIdsToDelete.length = 0
  modalStore.deleteMessage = ''
}