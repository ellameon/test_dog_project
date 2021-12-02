import {observer} from "mobx-react";
import {Carousel} from "./Carousel";

type Props = {
  urlArray: Array<string>
  activeIndex: number
}

export const ModalWindowCarousel = observer(function ModalWindowCarousel(props: Props) {
  const arrayLength = props.urlArray.length

  if (arrayLength === 0) {
    return null
  }

  return (
    <Carousel {...props}/>
  )
})
