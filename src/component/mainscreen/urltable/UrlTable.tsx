import {observer} from "mobx-react";
import {UrlTableField} from "./UrlTableField";
import {dogsStore} from "../../../stores/DogStore";
import './url-table.css'


export const UrlTable = observer(function UrlTable() {

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
          <UrlTableField key={dog.id} dog={dog}/>
        ))}
        </tbody>
      </table>
    </div>
  </>
})