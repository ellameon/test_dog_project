import React, {useCallback} from "react";
import {observer} from "mobx-react";
import {modalStore} from "../../../store/ModalStore";
import {DogController} from "../../../controller/DogController";
import {dogsStore} from "../../../store/DogStore";
import {Carousel} from "../carousel/Carousel";
import {useTranslation} from "react-i18next";


export const ModalWindow = observer(function ModalWindow() {

  const {t} = useTranslation();
  const dogsToDelete = modalStore.dogIdsToDelete
  const modalTextDelete = "ModalWindow.modalTextDelete"
  const modalTextDeleteChecked = "ModalWindow.modalTextDeleteChecked"
  const modalText = dogsToDelete.length > 1
    ? modalTextDeleteChecked
    : modalTextDelete

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
              {t(modalText)}
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
              {t("ModalWindow.deleteButton")}
            </button>
            <button type="button"
                    onClick={closeModal}
                    className="btn btn-outline-primary"
                    data-bs-dismiss="modal">
              {t("ModalWindow.cancelButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
})