import {observer} from "mobx-react";
import {dogRequestStore} from "../../../store/DogRequestStore";
import {DogForRequest} from "./DogForRequest";
import './DogsForRequest.scss'


export const DogsForRequest = observer(function DogsForRequest() {

  const dogsToShow = dogRequestStore.dogsOnPage

  return <div className='dog-request'>

      {dogsToShow.map((journalRecord) => (
        <DogForRequest key={journalRecord.id} dog={journalRecord}/>
      ))}
  </div>
})