import {deleteDogService} from "../service/deleteDogService";
import {AddDogService} from "../service/AddDogService";

import {OpenModalService} from "../service/OpenModalService";
import {closeModalService} from "../service/closeModalService";
import {changeIsCheckedService} from "../service/changeIsCheckedService";
import {DeleteCheckedDogs} from "../service/DeleteCheckedDogs";


export class DogController {

    static deleteDog(id : string,) {
        deleteDogService(id)
    }
    static DeleteSomeDogs() {
        DeleteCheckedDogs()
    }
    static AddDog() {
        AddDogService()
    }
    static openModal(onDeleteDog: () => void, deleteMessage:string) {
        OpenModalService(onDeleteDog, deleteMessage)
    }
    static closeModal(){
        closeModalService()
    }
    static changeIsChecked (id: string) {
        changeIsCheckedService(id)
    }
}