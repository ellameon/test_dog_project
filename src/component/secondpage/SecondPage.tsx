import {observer} from "mobx-react";
import './SecondPage.scss'
import {Navigation} from "../navigation/Navigation";


export const SecondPage = observer(function SecondPage() {
  return <div className=' second-page'>
    <Navigation/>
    <div className='row m-0'>
      <div className='col-md-10'>
        <div className="row justify-content-md-center m-0">
          <div className="col-md-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
})