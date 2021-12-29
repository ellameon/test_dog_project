import {observer} from "mobx-react";
import React from "react";
import {DogJournalRecord} from "../../../model/DogDtoToDataBase";


type Props = {
  dog: DogJournalRecord
}

export const JournalTableField = observer(function JournalTableField(props: Props) {

  const dog = props.dog
  const dogId = dog.id
  const dogUrl = dog.url
  const dogDate = dog.date

  return <>
    <tr>
      <td>
        <div>
          {dogId}
        </div>
      </td>
      <td>
        <div>
          {dogDate}
        </div>
      </td>
      <td>
        <a className="dog-anchor"
           href={dogUrl}
           rel="noreferrer"
           target="_blank">{dogUrl}
        </a>
      </td>
    </tr>
  </>
})

