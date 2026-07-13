import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className ="navbar">
            <div className = "logo">
                <Link to = "/">Zhaoxing Projects</Link>
            </div>
            <div className = "links">
                <Link to = "/Projects">Projects</Link>
                <Link to = "/Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar