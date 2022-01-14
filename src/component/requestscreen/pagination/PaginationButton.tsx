import {observer} from "mobx-react";
import {useCallback} from "react";
import {DogController} from "../../../controller/DogController";
import {dogRequestStore} from "../../../store/DogRecordRequestStore";
import {fillDogRecordsOnPageService} from "../../../service/paginationservice/fillDogRecordsOnPageService";


type Props = {
  page: number
}

export const PaginationButton = observer(function PaginationButton(props: Props) {

  let page = props.page
  const onClickPage = useCallback(() => {
    DogController.setCurrentPage(page)
    fillDogRecordsOnPageService()
  }, [page])

  const buttonClass =  page === dogRequestStore.currentPage
    ? "btn btn-outline-dark active"
    : "btn btn-outline-dark"

  return <>
    <button type="button" onClick={onClickPage} className={buttonClass} >{page}</button>
  </>
})