// Solar sites
import { stateSolar } from "../../interfaces/interfaces";
import { siteSelected } from "../sites/pageSlice";
import { useDispatch } from "react-redux";

function SolarSite(props: stateSolar[] | any) {
    const dispatch = useDispatch();

    const panels = props.solarPanels.map((panel: stateSolar | any, index: number) => {
        
        return (
            <div key={panel.id} onClick={() => dispatch(siteSelected({selectedId: panel.id, siteCategory: panel.category}))}>
                {panel.name} - {panel.location}
            </div>
        )

    })

    return (
        <div>
            {panels}
        </div>
    )

}

export default SolarSite;