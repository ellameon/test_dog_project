import {observer} from "mobx-react";
import {CarouselImage} from "./CarouselImage";
import './Carousel.scss'
import {useCallback, useEffect, useState} from "react";


type Props = {
  urlArray: Array<string>
  activeIndex: number
  className?: string
}

export const CarouselContent = observer(function CarouselContent(props: Props) {

  const arrayLengthCurrent = props.urlArray.length
  const [activeIndex, setActiveIndex] = useState(props.activeIndex)
  const [arrayLengthPrev, setArrayLength] = useState(arrayLengthCurrent)
  const showNavigationButtons = arrayLengthCurrent > 1

  useEffect(() => {
    if (arrayLengthPrev !== arrayLengthCurrent) {
      setArrayLength(arrayLengthCurrent)
      setActiveIndex(props.activeIndex)
    }
  }, [arrayLengthCurrent, arrayLengthPrev, props.activeIndex])

  const showNextImage = useCallback(() => {
    if (activeIndex === arrayLengthCurrent - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }, [activeIndex, arrayLengthCurrent, setActiveIndex])

  const showPrevImage = useCallback(() => {
    if (activeIndex === 0) {
      setActiveIndex(arrayLengthCurrent - 1)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }, [activeIndex, arrayLengthCurrent, setActiveIndex])

  return <>
    <div className={'carousel-widget '}>
      {props.urlArray.map((url, index) => (
        <CarouselImage url={url} key={index} isShown={index === activeIndex}/>
      ))}
      {showNavigationButtons && (
        <>
          <button className="carousel-control-prev control-button"
                  type="button"
                  onClick={showPrevImage}>
            <span className="carousel-control-prev-icon nav-button"
                  aria-hidden="true"/>
            <span className="visually-hidden">
              Previous
            </span>
          </button>
          <button className="carousel-control-next control-button"
                  type="button"
                  onClick={showNextImage}>
            <span className="carousel-control-next-icon nav-button"
                  aria-hidden="true"/>
            <span className="visually-hidden">
              Next
            </span>
          </button>
        </>
      )}
    </div>
  </>
})




