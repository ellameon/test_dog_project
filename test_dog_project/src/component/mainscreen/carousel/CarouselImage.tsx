import {observer} from "mobx-react";


type Props = {
  isShown: boolean
  url: string
}

export const CarouselImage = observer(function CarouselImage(props: Props) {

  const showClass = props.isShown ? 'd-block ' : 'd-none '

  return <>
    <div>
      <img src={props.url} className={showClass + 'mx-auto carousel-image '} alt="..."/>
    </div>
  </>
})