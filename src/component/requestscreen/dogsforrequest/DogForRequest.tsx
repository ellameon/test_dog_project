import {observer} from "mobx-react";
import {Dog} from "../../../model/Dog";


type Props = {
  dog: Dog
}

export const DogForRequest = observer(function DogForRequest(props: Props) {

  const url = props.dog.url

  return <div>

      <figure>
        <img src={url} alt=""/>
      </figure>

  </div>
})