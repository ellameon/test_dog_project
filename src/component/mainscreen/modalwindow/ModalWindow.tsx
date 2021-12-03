import React, {useCallback} from "react";
import {observer} from "mobx-react";
import {modalStore} from "../../../store/ModalStore";
import {DogController} from "../../../controller/DogController";
import './ModalWindow.css'
import {dogsStore} from "../../../store/DogStore";
import {Carousel} from "../carousel/Carousel";


export const ModalWindow = observer(function ModalWindow() {

  const dogsToDelete = modalStore.dogIdsToDelete
  const modalText = dogsToDelete.length > 1
    ? "Вы желаете удалить выбранные картинки?"
    : "Вы желаете удалить?"

  const deleteDogArray = dogsStore.dogs
    .filter(dog => dogsToDelete.includes(dog.id))

  const deleteUrlArray = deleteDogArray.map(dog => dog.url)

  const closeModal = useCallback(() => {
    DogController.closeModal()
  }, [])

  const deleteDogs = useCallback(() => {
    DogController.deleteDogs()
  }, [])

  return <>
    <div className="modal fade"
         id="staticBackdrop"
         data-bs-backdrop="static"
         data-bs-keyboard="false"
         tabIndex={-1}
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-light b-0">
            <h5 className="modal-title"
                id="staticBackdropLabel">
              {modalText}
            </h5>
            <button type="button"
                    onClick={closeModal}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Закрыть"/>
          </div>
          <Carousel urlArray={deleteUrlArray}
                    activeIndex={0}/>
          <div className="modal-footer bg-light b-0">
            <button type="button"
                    onClick={deleteDogs}
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal">
              Удалить
            </button>
            <button type="button"
                    onClick={closeModal}
                    className="btn btn-outline-primary"
                    data-bs-dismiss="modal">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
})