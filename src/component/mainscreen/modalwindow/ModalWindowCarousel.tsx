import {observer} from "mobx-react";
import {ModalWindowCarouselImage} from "./ModalWindowCarouselImage";
import {modalStore} from "../../../stores/ModalStore";
import './modal-window-carousel.css'
import {useCallback, useState} from "react";


export const ModalWindowCarousel = observer(function ModalWindowCarousel() {

    const [activeIndex, setActiveIndex] = useState(0)
    const showNextImage = useCallback(() => {
        if (activeIndex === modalStore.dogIdsToDelete.length - 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1)
        }
    }, [activeIndex])
    const showPrevImage = useCallback(() => {
        if (activeIndex === 0) {
            setActiveIndex(modalStore.dogIdsToDelete.length - 1)
        } else {
            setActiveIndex(activeIndex - 1)
        }
    }, [activeIndex])

    return <>
        <div className='image-area bg-light'>
            {modalStore.dogIdsToDelete.map((id, index) => (
                <ModalWindowCarouselImage id={id} key={index} isShown={index === activeIndex}/>
            ))}
            <button className="carousel-control-prev control-button" type="button" onClick={showPrevImage}>
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next control-button" type="button" onClick={showNextImage}>
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
})




