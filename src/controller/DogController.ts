import {getDogRecordFromServerService} from "../service/dogoperationservice/getDogRecordFromServerService";
import {closeModalService} from "../service/modalservice/closeModalService";
import {toggleCheckedDogRecordService} from "../service/dogoperationservice/toggleCheckedDogRecordService";
import {openModalService} from "../service/modalservice/openModalService";
import {deleteDogRecordsService} from "../service/dogoperationservice/deleteDogRecordsService";
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
import {setSurnameService} from "../service/dogrequestorderservice/setSurnameService";
import {setFirstNameService} from "../service/dogrequestorderservice/setFirstNameService";
import {setSecondNameService} from "../service/dogrequestorderservice/setSecondNameService";
import {setEmailService} from "../service/dogrequestorderservice/setEmailService";
import {setPhoneService} from "../service/dogrequestorderservice/setPhoneService";
import {setCountryService} from "../service/dogrequestorderservice/setCountryService";
import {setCityService} from "../service/dogrequestorderservice/setCityService";
import {setStreetService} from "../service/dogrequestorderservice/setStreetService";
import {setHouseService} from "../service/dogrequestorderservice/setHouseService";
import {setApartmentService} from "../service/dogrequestorderservice/setApartmentService";
import {setCurrentPageService} from "../service/paginationservice/setCurrentPageService";


export class DogController {

  static openModal(dogIds: Array<number>): void {
    openModalService(dogIds)
  }

  static webSocketOpen(): WebSocket{
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


}
