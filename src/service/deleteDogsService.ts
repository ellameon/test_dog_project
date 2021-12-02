import {runInAction} from "mobx";

import {dogsStore} from "../store/DogStore";
import {modalStore} from "../store/ModalStore";
import {checkedDogsStore} from "../store/CheckedDogsStore";


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
}