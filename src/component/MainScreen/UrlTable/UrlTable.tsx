import {observer} from "mobx-react";
import {UrlTableField} from "./UrlTableField";
import {dogsStore} from "../../stores/DogStore";
import './urlTable.css'


export const UrlTable = observer(function UrlTable() {

    return <>
        <div className="dogTable">
            <table className="table">
                <thead>
                <tr>
                    <th className="url" scope="col md-1 ">Url</th>
                    <th scope="col md-1">Выбрать</th>
                    <th scope="col md-1">Удалить</th>
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