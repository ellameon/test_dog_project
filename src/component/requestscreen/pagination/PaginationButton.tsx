import {observer} from "mobx-react";
import {useCallback} from "react";
import {DogRecordController} from "../../../controller/DogRecordController";
import {dogRequestStore} from "../../../store/DogRecordRequestStore";
import {fillDogRecordsOnPageService} from "../../../service/paginationservice/fillDogRecordsOnPageService";


type Props = {
  page: number
}

export const PaginationButton = observer(function PaginationButton(props: Props) {

  let page = props.page
  const onClickPage = useCallback(() => {
    DogRecordController.setCurrentPage(page)
    fillDogRecordsOnPageService()
  }, [page])

  const buttonClass =  page === dogRequestStore.currentPage
    ? "btn btn-outline-dark active"
    : "btn btn-outline-dark"

  return <>
    <button type="button" onClick={onClickPage} className={buttonClass} >{page}</button>
  </>
})