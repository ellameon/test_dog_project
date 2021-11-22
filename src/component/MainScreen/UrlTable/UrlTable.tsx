import {observer} from "mobx-react";
import {UrlTableField} from "./UrlTableField";
import {dogsStore} from "../../stores/dogStore";
import './UrlTable.css'


export const UrlTable = observer(function UrlTable() {
    return <>
        <div className="dogTable">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Url</th>
                    <th scope="col">Выбрать/Удалить</th>
                </tr>
                </thead>
                <tbody>
                {dogsStore.dogs.map((dog, index) => (
                    <UrlTableField key={index} dog={dog}/>
                ))}

                </tbody>
            </table>


        </div>
    </>
})