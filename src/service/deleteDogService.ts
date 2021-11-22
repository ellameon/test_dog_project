import {runInAction, toJS} from "mobx";
import {dogsStore} from "../component/stores/dogStore";

export const deleteDogService = (id: string) => {
    runInAction(() => {
        console.log(toJS(dogsStore.dogs) )
        const dogIndex = (toJS(dogsStore.dogs)).findIndex((dog) => dog.id === id)

        const deleteDogArray = toJS(dogsStore.dogs)
        deleteDogArray.splice(dogIndex, 1)
        dogsStore.dogs = deleteDogArray

        console.log(dogIndex)
        console.log(id)
    })
}

