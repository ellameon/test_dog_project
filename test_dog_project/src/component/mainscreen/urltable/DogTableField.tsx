import {observer} from "mobx-react";
import {Dog} from "../../../model/Dog";
import React, {useCallback} from "react";
import {DogController} from "../../../controller/DogController";
import {checkedDogsStore} from "../../../store/CheckedDogsStore";


type Props = {
  dog: Dog
}

export const DogTableField = observer(function DogTableField(props: Props) {

  const dog = props.dog
  const dogId = dog.id
  const dogUrl = dog.url
  const isToggled = checkedDogsStore.checkedDogs.includes(dogId)

  const openModal = useCallback(() => {
    const deleteIdArray = [dogId];
    DogController.openModal(deleteIdArray)
  }, [dogId])

  const changeChecked = useCallback(() => {
    DogController.changeIsChecked(dogId)
  }, [dogId])

  return <>
    <tr>
      <td><a className="dog-anchor"
             href={dogUrl}
             rel="noreferrer"
             target="_blank">{dogUrl}
      </a>
      </td>
      <td>
        <div className="form-check form-switch toggle ">
          <input onChange={changeChecked}
                 checked={isToggled}
                 className="form-check-input"
                 type="checkbox"
                 id="flexSwitchCheckDefault"
                 value=""/>
        </div>
      </td>
      <td className="close-button">
        <button type="button"
                onClick={openModal}
                className="btn-close "
                aria-label="Close"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"/>
      </td>
    </tr>
  </>
})


