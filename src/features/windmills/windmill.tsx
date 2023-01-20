// Windmill component
import { Link } from "react-router-dom";
import { stateWindmill} from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { siteSelected } from "../sites/pageSlice";

function WindmillComponent(props: stateWindmill[] | any) {
  const dispatch = useDispatch()

  const mills = props.millList.map((mill: stateWindmill | any, index: number) => {
  
    return (
      <div key={mill.id} onClick={() => dispatch(siteSelected({selectedId: mill.id, siteCategory: mill.category}))}>
        {mill.name} - {mill.location}
      </div>
    )

  })

  return(
    <div>
      {mills}
    </div>
  )

}

export default WindmillComponent;