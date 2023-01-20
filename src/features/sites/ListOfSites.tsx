// imports

import { Outlet } from "react-router-dom";
import SelectedSite from "./SelectedSite";

function ListOfSites(){

    return(
        <>
            <div className="layout-site-list-container">
                <Outlet/>
            </div>
            <div className="layout-site-details-container">
                <SelectedSite />
            </div>
        </>

    )

}

export default ListOfSites;