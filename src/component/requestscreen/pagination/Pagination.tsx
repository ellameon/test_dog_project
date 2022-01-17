import {observer} from "mobx-react";
import {dogRequestStore} from "../../../store/DogRecordRequestStore";
import {useCallback} from "react";
import {DogRecordController} from "../../../controller/DogRecordController";
import {PaginationButton} from "./PaginationButton";
import {fillDogRecordsOnPageService} from "../../../service/paginationservice/fillDogRecordsOnPageService";


export const Pagination = observer(function Pagination() {

  const onClickPrevious = useCallback(() => {
    DogRecordController.setCurrentPage(dogRequestStore.currentPage - 1)
    fillDogRecordsOnPageService()
  }, [])

  const onClickNext = useCallback(() => {
    DogRecordController.setCurrentPage(dogRequestStore.currentPage + 1)
    fillDogRecordsOnPageService()
  }, [])

  const pagesToShow = dogRequestStore.pagesToShow

  return <div>
    <div className="btn-group" role="group">
      <button type="button" onClick={onClickPrevious} className="btn btn-outline-dark">&laquo;</button>
      {pagesToShow.map((page) => (
        <PaginationButton key={page} page={page}/>
      ))}
      <button type="button" onClick={onClickNext} className="btn btn-outline-dark">&raquo;</button>
    </div>
  </div>
})