import {observer} from "mobx-react";
import {ModalWindowCarouselImage} from "./ModalWindowCarouselImage";
import {modalStore} from "../../../store/ModalStore";
import './modal-window-carousel.css'
import {useCallback} from "react";
import {DogController} from "../../../controller/DogController";


export const ModalWindowCarousel = observer(function ModalWindowCarousel() {

  const activeIndex = modalStore.activeIndex
  const showNavigationButtons = modalStore.dogIdsToDelete.length > 1

  const showNextImage = useCallback(() => {
    if (activeIndex === modalStore.dogIdsToDelete.length - 1) {
      DogController.setActiveIndex(0)
    } else {
      DogController.setActiveIndex(activeIndex + 1)
    }
  }, [activeIndex])
  const showPrevImage = useCallback(() => {
    if (activeIndex === 0) {
      DogController.setActiveIndex(modalStore.dogIdsToDelete.length - 1)
    } else {
      DogController.setActiveIndex(activeIndex - 1)
    }
  }, [activeIndex])

  return <>
    <div className='image-area bg-light'>
      {modalStore.dogIdsToDelete.map((id, index) => (
        <ModalWindowCarouselImage id={id} key={index} isShown={index === activeIndex}/>
      ))}
      {showNavigationButtons && (
        <>
          <button className="carousel-control-prev control-button" type="button" onClick={showPrevImage}>
            <span className="carousel-control-prev-icon nav-button" aria-hidden="true"/>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next control-button" type="button" onClick={showNextImage}>
            <span className="carousel-control-next-icon nav-button" aria-hidden="true"/>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  </>
})




