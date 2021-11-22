import {observer} from "mobx-react";
import {Dog} from "../../../model/Dog";
import React, {useCallback} from "react";
import {DogController} from "../../../controller/DogController";

type Props = {
    dog: Dog
}

export const UrlTableField = observer(function UrlTableField(props: Props) {

    const deleteDog = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        DogController.deleteDog(dog.id)
    }, [])
    const dog = props.dog

    return <>
        <tr>
            <th scope="row">{dog.id}</th>
            <td>{dog.message}</td>
            <td>
                <input type="checkbox"/>
                <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
            </td>
        </tr>



        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Уверены вы?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"/>
                    </div>
                    <div className="modal-body">
                        Вы точно хотите удалить?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button onClick={deleteDog} type="button" data-bs-dismiss="modal" className="btn btn-primary">Удалить</button>
                    </div>
                </div>
            </div>
        </div>


    </>
})