import {observer} from "mobx-react";
import {useTranslation} from "react-i18next";
import {JournalTableField} from "./JournalTableField";
import {journalStore} from "../../../store/JournalStore";
import './JournalTable.scss'
import {ChangeEvent, useCallback} from "react";
import {DogController} from "../../../controller/DogController";


export const JournalTable = observer(function JournalTable() {

  const {t} = useTranslation()
  const findId = journalStore.idToFind
  const recordsToShow = (findId === 0)
    ? journalStore.dogs.map((journalRecord) => (
      <JournalTableField key={journalRecord.id} dog={journalRecord}/>
    ))
    :
    <JournalTableField key={journalStore.dogs[findId].id} dog={journalStore.dogs[findId - 1]}/>


  const onChangeFromDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fromDate = event.target.value
    DogController.setFromDate(new Date(fromDate))
  }, [])

  const onChangeToDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const toDate = event.target.value
    DogController.setToDate(new Date(toDate))
  }, [])

  const onFindId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const findId = event.target.value
    DogController.setIdToFind(Number(findId))
    DogController.fillJournalStoreFromDataBase()
  }, [])

  const refreshJournal = useCallback(() => {
    DogController.fillJournalStoreFromDataBase()
  }, [])

  return <>
    <div className="journal">
      <div className="row p-3">
        <div className="journal-header">
          {t("JournalScreen.JournalHeader.header")}
        </div>
        <div className="journal-header">
          {t("JournalScreen.JournalHeader.chooseDate")}
        </div>
        <div className='col'>
          <form>
            <div>
              <label htmlFor="fromDate">{t("JournalScreen.JournalHeader.fromDate")}</label>
              <input className='form-control'
                     type="date"
                     id="fromDate"
                     onChange={onChangeFromDate}
                     name="fromDate"/>
            </div>
          </form>
        </div>
        <div className='col'>
          <form>
            <div>
              <label htmlFor="toDate">{t("JournalScreen.JournalHeader.toDate")}</label>
              <input className='form-control'
                     type="date"
                     id="toDate"
                     onChange={onChangeToDate}
                     name="toDate"/>
            </div>
          </form>
        </div>
        <div className='col'>
          <form>
            <div>
              <label htmlFor="findId">{t("JournalScreen.JournalHeader.findId")}</label>
              <input className='form-control'
                     type="number"
                     id="findId"
                     onChange={onFindId}
                     name="findId"/>
            </div>
          </form>
        </div>
        <div className=" col journal-button">
          <button className="btn btn-outline-secondary"
                  onClick={refreshJournal}>
            {t("JournalScreen.JournalHeader.journalButton")}
          </button>
        </div>
      </div>
      <div className='journal-table-head'>
        <table className="table">
          <thead>
          <tr>
            <th className="journal-id">
              {t("JournalScreen.id")}
            </th>
            <th>
              {t("JournalScreen.date")}
            </th>
            <th className="journal-table-head-url">
              {t("JournalScreen.url")}
            </th>
          </tr>
          </thead>
        </table>
      </div>
      <div className="journal-table">
        <table className="table">
          <tbody>

          {recordsToShow}

          </tbody>
        </table>
      </div>
    </div>
  </>
})