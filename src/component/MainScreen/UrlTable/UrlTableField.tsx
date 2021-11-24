import {observer} from "mobx-react";
import {Dog} from "../../../model/Dog";
import React, {useCallback} from "react";
import {DogController} from "../../../controller/DogController";


type Props = {
    dog: Dog
}

export const UrlTableField = observer(function UrlTableField(props: Props) {
    const dog = props.dog
    const deleteId = dog.id
    const deleteMessage = dog.message

    const onDeleteDog = useCallback(() => {
        DogController.deleteDog(deleteId)
    }, [deleteId])
    const openModal = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        DogController.openModal(onDeleteDog, deleteMessage)
    }, [])
    const changeChecked = useCallback(() => {
        DogController.changeIsChecked(dog.id)
    }, [dog.id])
    console.log('render', dog.id, dog.isChecked)
    return <>
        <tr>
            <td><a className="aDog" href={dog.message || " No data"} target="_blank">{dog.message || "No data"}</a></td>
            <td>
                <div className="form-check form-switch">
                    <input onChange={changeChecked} className="form-check-input" type="checkbox"
                           id="flexSwitchCheckDefault" value=""/>
                </div>
            </td>
            <td>
                <button type="button" onClick={openModal} className="btn-close" aria-label="Close"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"/>
            </td>
        </tr>
    </>
})


