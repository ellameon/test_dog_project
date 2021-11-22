import {getAutoDataService} from "../service/getAutoDataService";
import {getDataService} from "../service/getDataService";
import {deleteDogService} from "../service/deleteDogService";

export class DogController {
    static getAutoDataFromServer() {
        getAutoDataService()
    }

    static getDataService() {
        getDataService()
    }
static deleteDog(id: string) {
        deleteDogService(id)
}

}