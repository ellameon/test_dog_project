import {observer} from "mobx-react";
import {DogJournalRecord} from "../../../model/DogDtoToDataBase";


type Props = {
  dog: DogJournalRecord
}

export const DogForRequest = observer(function DogForRequest(props: Props) {

  const url = props.dog.url

  return <div>

      <figure>
        <img src={url} alt=""/>
      </figure>

  </div>
})