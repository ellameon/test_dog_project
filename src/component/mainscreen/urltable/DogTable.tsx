import {observer} from "mobx-react";
import {DogTableField} from "./DogTableField";
import {dogsStore} from "../../../store/DogStore";
import './DogTable.css'


export const DogTable = observer(function DogTable() {

  return <>
    <div className="dog-table">
      <table className="table">
        <thead>
        <tr>
          <th className="dog-url">Url</th>
          <th>Выбрать</th>
          <th>Удалить</th>
        </tr>
        </thead>
        <tbody>
        {dogsStore.dogs.map((dog) => (
          <DogTableField key={dog.id} dog={dog}/>
        ))}
        </tbody>
      </table>
    </div>
  </>
})