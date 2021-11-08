import {Link} from "react-router-dom"
const SideBar = () => {
    return(
        <div className="side-bar">
            <h1><Link to="/" class="link">Home</Link></h1>
            <h1><Link to="/favorites" class="link">Favorites</Link></h1>
        </div>
    )
}
export default SideBar