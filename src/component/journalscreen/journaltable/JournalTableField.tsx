import {observer} from "mobx-react";
import React from "react";
import {format} from "date-fns"
import {DogRecord} from "../../../model/DogRecord";


type Props = {
  dog: DogRecord
}

export const JournalTableField = observer(function JournalTableField(props: Props) {

  const dog = props.dog
  const dogId = dog.id
  const dogUrl = dog.url
  const dogDate = format(dog.date, 'dd.MM.yyyy HH:mm:ss')

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

