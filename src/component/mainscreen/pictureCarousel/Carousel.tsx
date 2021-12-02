import {observer} from "mobx-react";
import {CarouselImage} from "./CarouselImage";
import './carousel.css'
import {useCallback, useState} from "react";

type Props = {
  urlArray: Array<string>
  activeIndex: number
}

export const Carousel = observer(function Carousel(props: Props) {

  const arrayLength = props.urlArray.length
  const [activeIndex, setActiveIndex] = useState(props.activeIndex)
  const showNavigationButtons = arrayLength > 1

  const showNextImage = useCallback(() => {
    console.log("Next image. ActiveIndex = " + activeIndex)
    if (activeIndex === arrayLength - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }, [activeIndex, arrayLength, setActiveIndex])

  const showPrevImage = useCallback(() => {
    console.log("Prev image. ActiveIndex = " + activeIndex)
    if (activeIndex === 0) {
      setActiveIndex(arrayLength - 1)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }, [activeIndex, arrayLength, setActiveIndex])

  return <>
    <div className='image-area bg-light'>
      {props.urlArray.map((url, index) => (
        <CarouselImage url={url} key={index} isShown={index === activeIndex}/>
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




