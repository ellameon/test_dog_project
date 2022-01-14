import {observer} from "mobx-react";
import {DogTableField} from "./DogTableField";
import {dogsStore} from "../../../store/DogRecordsStore";
import './DogTable.scss'
import {useTranslation} from "react-i18next";


export const DogTable = observer(function DogTable() {

  const {t} = useTranslation()

  return <>
    <div className="dog-table">

      <table className="table">
        <thead>
        <tr>
          <th className="dog-url">{t("MainScreen.Table.url")}</th>
          <th>{t("MainScreen.Table.check")}</th>
          <th>{t("MainScreen.Table.delete")}</th>
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