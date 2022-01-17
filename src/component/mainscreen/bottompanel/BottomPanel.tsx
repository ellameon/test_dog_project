import {observer} from "mobx-react";
import React, {useCallback} from "react";
import './BottomPanel.scss'
import {DogRecordController} from "../../../controller/DogRecordController";
import {dogsStore} from "../../../store/DogRecordsStore";
import {checkedDogsStore} from "../../../store/CheckedDogsStore";
import {useTranslation} from "react-i18next";


export const BottomPanel = observer(function BottomPanel() {
  const {t} = useTranslation();
  const dogs = dogsStore.dogs
  const lastDog = dogs[dogs.length - 1]
  const isLeastOneChecked = checkedDogsStore.checkedDogs.length > 0
  const isDisabled = lastDog === undefined || !isLeastOneChecked
  const openModal = useCallback(() => {
    DogRecordController.openModal(checkedDogsStore.checkedDogs)
  }, [])

  return <>
    <div className="row center-block bottom-panel">
      <div className="center-block p-3">
        <button
          disabled={isDisabled}
          className="btn btn-outline-dark button "
          onClick={openModal}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">
          {t("MainScreen.buttons.deleteSomeDogsButton")}
        </button>
      </div>
    </div>
  </>
})