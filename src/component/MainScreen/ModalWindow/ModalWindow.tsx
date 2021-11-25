import React, {useCallback} from "react";
import {observer} from "mobx-react";
import {ModalStore} from "../../stores/ModalStore";
import {DogController} from "../../../controller/DogController";


export const ModalWindow = observer(function ModalWindow() {

    const deleteDog = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        ModalStore.onDeleteDog()
        DogController.closeModal()
    }, [])
    const closeModal = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        DogController.closeModal()
    }, [])
    const deleteSomeDogs = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        DogController.DeleteSomeDogs()
    }, [])

    let modalText
    let isShowPicture
    let deleteFunction
        !
    ModalStore.isMultiDelete ? (modalText = "Вы желаете удалить выбранные картинки?")
        : (modalText = "Вы желаете удалить?")
    !
        ModalStore.isMultiDelete ? (isShowPicture =
            <img src={ModalStore.deleteMessage} className="rounded mx-auto d-block"/>)
        : (isShowPicture = null)
    !
        ModalStore.isMultiDelete ? (deleteFunction = deleteDog) : (deleteFunction = deleteSomeDogs)


    return <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
             tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{modalText}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Закрыть"/>
                    </div>
                    {isShowPicture}
                    <div className="modal-footer">
                        <button type="button" onClick={deleteFunction} className="btn btn-outline-danger"
                                data-bs-dismiss="modal">Удалить
                        </button>
                        <button type="button" onClick={closeModal} className="btn btn-outline-primary"
                                data-bs-dismiss="modal">Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
})