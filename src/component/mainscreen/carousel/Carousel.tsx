import {observer} from "mobx-react";
import {CarouselContent} from "./CarouselContent";


type Props = {
  urlArray: Array<string>
  activeIndex: number
}

export const Carousel = observer(function Carousel(props: Props) {
  const arrayLength = props.urlArray.length

  if (arrayLength === 0) {
    return null
  }

  return (
    <CarouselContent {...props}/>
  )
})
