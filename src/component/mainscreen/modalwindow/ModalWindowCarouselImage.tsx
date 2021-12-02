import {observer} from "mobx-react";
import {dogsStore} from "../../../stores/DogStore";


type Props = {
  id: number
  isShown: boolean
}

export const ModalWindowCarouselImage = observer(function ModalWindowCarouselImage(props: Props) {

  const deleteDog = dogsStore.dogs.find(dog => props.id === dog.id)
  const deleteMessage = deleteDog?.url
  const showClass = props.isShown ? 'd-block ' : 'd-none '

  return <>
    <div>
      <img src={deleteMessage} className={showClass + 'mx-auto carousel-image '} alt="..."/>
    </div>
  </>
})