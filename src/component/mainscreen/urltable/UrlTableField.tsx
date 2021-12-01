import {observer} from "mobx-react";
import {Dog} from "../../../model/Dog";
import React, {useCallback} from "react";
import {DogController} from "../../../controller/DogController";
import {checkedDogsStore} from "../../../stores/CheckedDogsStore";


type Props = {
    dog: Dog
}

export const UrlTableField = observer(function UrlTableField(props: Props) {
    const dog = props.dog
    const deleteId = dog.id
    const deleteMessage = dog.message
    const isToggled = checkedDogsStore.checkedDogs.includes(dog.id)

    const openModal = useCallback(() => {
        DogController.openModal(deleteId, deleteMessage)
    }, [deleteMessage, deleteId])
    const changeChecked = useCallback(() => {
        DogController.changeIsChecked(dog.id)
    }, [dog.id])

    return <>
        <tr>
            <td><a className="aDog" href={dog.message} rel="noreferrer" target="_blank">{dog.message}</a></td>
            <td>
                <div className="form-check form-switch toggle">
                    <input onChange={changeChecked} checked={isToggled} className="form-check-input" type="checkbox"
                           id="flexSwitchCheckDefault" value=""/>
                </div>
            </td>
            <td className="close-button">
                <button type="button" onClick={openModal} className="btn-close " aria-label="Close"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"/>
            </td>
        </tr>
    </>
})

