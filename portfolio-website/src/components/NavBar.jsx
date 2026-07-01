import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className ="navbar">
            <div className = "logo">
                <Link to = "/">Zhaoxing Projects</Link>
                <p>Zhaoxing Projects</p>
            </div>
            <div className = "links">
                <p>Profile</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}

export default NavBar