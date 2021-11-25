import {deleteDogService} from "../service/deleteDogService";
import {AddDogService} from "../service/AddDogService";
import {OpenModalService} from "../service/OpenModalService";
import {closeModalService} from "../service/closeModalService";
import {changeIsCheckedService} from "../service/changeIsCheckedService";
import {DeleteCheckedDogs} from "../service/DeleteCheckedDogs";
import {OpenMassModalService} from "../service/OpenMassModalService";


export class DogController {

    static openMassModal() {
        OpenMassModalService()
    }
    static deleteDog(id: string,) {
        deleteDogService(id)
    }

    static DeleteSomeDogs() {
        DeleteCheckedDogs()
    }

    static AddDog() {
        AddDogService()
    }

    static openModal(onDeleteDog: () => void, deleteMessage: string, isMultiDelete: boolean) {
        OpenModalService(onDeleteDog, deleteMessage)
    }

    static closeModal() {
        closeModalService()
    }

    static changeIsChecked(id: string) {
        changeIsCheckedService(id)
    }
}