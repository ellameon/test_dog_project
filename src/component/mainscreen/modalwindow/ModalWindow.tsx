import React, {useCallback} from "react";
import {observer} from "mobx-react";
import {modalStore} from "../../../stores/ModalStore";
import {DogController} from "../../../controller/DogController";
import './modal-window.css'
import {ModalWindowCarousel} from "./ModalWindowCarousel";


export const ModalWindow = observer(function ModalWindow() {

    const closeModal = useCallback(() => {
        DogController.closeModal()
    }, [])
    const deleteSomeDogs = useCallback(() => {
        DogController.confirmedDeleteDog()
    }, [])
    const modalText = modalStore.dogIdsToDelete.length > 1
        ? "Вы желаете удалить выбранные картинки?"
        : "Вы желаете удалить?"
    const isShowPicture = modalStore.dogIdsToDelete.length > 1

    return <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
             tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-light b-0">
                        <h5 className="modal-title" id="staticBackdropLabel">{modalText}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Закрыть"/>
                    </div>
                    {isShowPicture && (<ModalWindowCarousel/>)}
                    {!isShowPicture && (
                        <img src={modalStore.deleteMessage}
                             className="rounded mx-auto d-block modal-img" alt={'картинка собаки'}/>
                    )}
                    <div className="modal-footer bg-light b-0">
                        <button type="button" onClick={deleteSomeDogs} className="btn btn-outline-danger"
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