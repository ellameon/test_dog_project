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

    return <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
             tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Вы желаете удалить?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Закрыть"/>
                    </div>
                    <div>
                        <img src={ModalStore.deleteMessage} className="rounded mx-auto d-block"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={deleteDog} className="btn btn-outline-danger"
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