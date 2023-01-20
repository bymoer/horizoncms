// imports
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <nav className="layout-navbar-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sites/windmills">Windmills</Link></li>
                <li><Link to="/sites/solarpanels">Solarpanels</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;