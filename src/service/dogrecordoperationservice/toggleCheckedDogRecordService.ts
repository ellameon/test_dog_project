import {runInAction} from "mobx";
import {checkedDogsStore} from "../../store/CheckedDogsStore";


export function toggleCheckedDogRecordService(toggleId: number): void {

  const checkedDogs = checkedDogsStore.checkedDogs

  runInAction(() => {
    if (checkedDogs.includes(toggleId)) {
      checkedDogs.filter(id => id !== toggleId)
    } else {
      checkedDogs.push(toggleId)
    }
  })
}