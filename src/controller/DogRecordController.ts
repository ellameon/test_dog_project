import {getDogRecordFromServerService} from "../service/dogrecordoperationservice/getDogRecordFromServerService";
import {closeModalService} from "../service/modalservice/closeModalService";
import {toggleCheckedDogRecordService} from "../service/dogrecordoperationservice/toggleCheckedDogRecordService";
import {openModalService} from "../service/modalservice/openModalService";
import {deleteDogRecordsService} from "../service/dogrecordoperationservice/deleteDogRecordsService";
import {toggleRequestService} from "../service/requestservice/toggleRequestService";
import {dogRecordRequestService} from "../service/requestservice/dogRecordRequestService";
import {autoRequestRestartService} from "../service/requestservice/autoRequestRestartService";
import {configService} from "../service/configservise/configService";
import {setLoginService} from "../service/authservice/setLoginService";
import {setPasswordService} from "../service/authservice/setPasswordService";
import {logOutService} from "../service/authservice/logOutService";
import {authService} from "../service/authservice/authService";
import {getWebSocketService} from "../service/websocketservice/getWebSocketService";
import {alertTimerSetService} from "../service/alertservice/alertTimerSetService";
import {setFromDateService} from "../service/dateservice/setFromDateService";
import {setToDateService} from "../service/dateservice/setToDateService";
import {fillJournalStoreFromDataBaseService} from "../service/databaseservice/fillJournalStoreFromDataBaseService";
import {setIdToFindService} from "../service/databaseservice/setIdToFindService";
import {selectJournalRecordService} from "../service/databaseservice/selectJournalRecordService";
import {fillRequestStoreFromDataBaseService} from "../service/databaseservice/fillRequestStoreFromDataBaseService";
import {setSurnameService} from "../service/dogrecordrequestorderservice/setSurnameService";
import {setFirstNameService} from "../service/dogrecordrequestorderservice/setFirstNameService";
import {setSecondNameService} from "../service/dogrecordrequestorderservice/setSecondNameService";
import {setEmailService} from "../service/dogrecordrequestorderservice/setEmailService";
import {setPhoneService} from "../service/dogrecordrequestorderservice/setPhoneService";
import {setCountryService} from "../service/dogrecordrequestorderservice/setCountryService";
import {setCityService} from "../service/dogrecordrequestorderservice/setCityService";
import {setStreetService} from "../service/dogrecordrequestorderservice/setStreetService";
import {setHouseService} from "../service/dogrecordrequestorderservice/setHouseService";
import {setApartmentService} from "../service/dogrecordrequestorderservice/setApartmentService";
import {setCurrentPageService} from "../service/paginationservice/setCurrentPageService";
import {
  setDogRecordToRequestOrderStoreService
} from "../service/dogrecordrequestorderservice/setDogRecordToRequestOrderStoreService";
import {orderAlertShowService} from "../service/alertservice/orderAlertShowService";
import {checkIsOrderValidService} from "../service/dogrecordrequestorderservice/checkIsOrderValidService";
import {sendDogOrderToServerService} from "../service/websocketservice/sendDogOrderToServerService";


export class DogRecordController {

  static openModal(dogIds: Array<number>): void {
    openModalService(dogIds)
  }

  static webSocketOpen(): WebSocket {
    return getWebSocketService() as WebSocket;
  }

  static getNewDog(): void {
    getDogRecordFromServerService().then()
  }

  static closeModal(): void {
    closeModalService()
  }

  static alertShow(): void {
    alertTimerSetService()
  }

  static orderAlertShow(): void {
    orderAlertShowService()
  }

  static changeIsChecked(id: number): void {
    toggleCheckedDogRecordService(id)
  }

  static deleteDogs(): void {
    deleteDogRecordsService()
  }

  static toggleAutoRequest(): void {
    toggleRequestService()
  }

  static dogRequest(): void {
    dogRecordRequestService()
  }

  static autoRequestRestart(): void {
    autoRequestRestartService()
  }

  static setConfig(): void {
    configService().then()
  }

  static auth(): void {
    authService()
  }

  static setLogin(login: string): void {
    setLoginService(login)
  }

  static setPassword(password: string): void {
    setPasswordService(password)
  }

  static logOut(): void {
    logOutService()
  }

  static setFromDate(fromDate: Date): void {
    setFromDateService(fromDate)
  }

  static setToDate(toDate: Date): void {
    setToDateService(toDate)
  }

  static fillJournalStoreFromDataBase(): void {
    fillJournalStoreFromDataBaseService()
  }

  static fillRequestStoreFromDataBase(): void {
    fillRequestStoreFromDataBaseService()
  }

  static setIdToFind(findId: number): void {
    setIdToFindService(findId)
  }

  static selectJournalRecord(): void {
    selectJournalRecordService()
  }

  static setSurname(surname: string): void {
    setSurnameService(surname)
  }

  static setFirstName(firstName: string): void {
    setFirstNameService(firstName)
  }

  static setSecondName(secondName: string): void {
    setSecondNameService(secondName)
  }

  static setEmail(email: string): void {
    setEmailService(email)
  }

  static setPhone(phone: string): void {
    setPhoneService(phone)
  }

  static setCountry(country: string): void {
    setCountryService(country)
  }

  static setCity(city: string): void {
    setCityService(city)
  }

  static setStreet(street: string): void {
    setStreetService(street)
  }

  static setHouse(house: string): void {
    setHouseService(house)
  }

  static setApartment(apartment: string): void {
    setApartmentService(apartment)
  }

  static setCurrentPage(currentPage: number): void {
    setCurrentPageService(currentPage)
  }

  static setDogRecordIdToRequestOrderStore(id: number, url: string): void {
    setDogRecordToRequestOrderStoreService(id, url)
  }

  static checkIsOrderValid(): boolean {
    return checkIsOrderValidService();
  }

  static sendDogOrderToServer(): void {
    sendDogOrderToServerService()
  }
}
