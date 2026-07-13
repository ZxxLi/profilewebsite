import { Link } from "react-router-dom";

function Profile(){

    function ProjectButtonClicked(){
        alert("Clicked")
    }

    return (
        <div className = "Profile">
            <div className = "Main-Descriptor">
                <h1>Zhaoxing Portfolio Website</h1>
                <h2>Welcome!</h2>
                <p>This website contains information about work done and projects that I have taken part of.</p>
                <h3>Experience</h3>
            </div>
            <div className = "Experience">
                <p>Time line logic here</p>
            </div>
            <div className = "Further">
                <p>Want to find out more about the projects? Click the button below</p>
                <Link to = "/Projects" className = "button-link">Projects</Link>
            </div>
            
        </div>
    )
}

export default Profile;