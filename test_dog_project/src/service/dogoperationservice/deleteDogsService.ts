import {runInAction} from "mobx";
import {dogsStore} from "../../store/DogStore";
import {modalStore} from "../../store/ModalStore";
import {checkedDogsStore} from "../../store/CheckedDogsStore";


export function deleteDogsService(): void {

  const dogsArrayToDelete: Array<number> = modalStore.dogIdsToDelete

  runInAction(() => {
    deleteDogs(dogsArrayToDelete)
    updateCheckedDogs(dogsArrayToDelete)
    clearModalStore(dogsArrayToDelete)
  })
}

function deleteDogs(dogsArrayToDelete: Array<number>) {
  dogsStore.dogs = dogsStore.dogs
    .filter(dog => !dogsArrayToDelete.includes(dog.id))
}

function updateCheckedDogs(dogsArrayToDelete: Array<number>) {
  checkedDogsStore.checkedDogs = checkedDogsStore.checkedDogs
    .filter(id => !dogsArrayToDelete.includes(id))
}

function clearModalStore(dogsArrayToDelete: Array<number>) {
  dogsArrayToDelete.length = 0
}