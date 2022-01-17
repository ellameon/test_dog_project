import {observer} from "mobx-react";
import {DogRecord} from "../../../model/DogRecord";
import {useCallback} from "react";
import {DogRecordController} from "../../../controller/DogRecordController";
import {dogRequestOrderStore} from "../../../store/DogRecordRequestOrderStore";


type Props = {
  dog: DogRecord
}

export const DogForRequest = observer(function DogForRequest(props: Props) {

  const id = props.dog.id
  const url = props.dog.url

  const selectDogRecord = useCallback(() => {
    DogRecordController.setDogRecordIdToRequestOrderStore(id, url)
  }, [id, url])

  const selectedClass = (id === dogRequestOrderStore.choosedDogId)
    ? 'choosed'
    : ''

  return <div className={selectedClass}>
    <figure >
      <img  onClick={selectDogRecord} src={url} alt=""/>
    </figure>
  </div>
})