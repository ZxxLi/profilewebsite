import { Link } from "react-router-dom";
import { Form } from "../components/Form"

function Contact(){
    return <div className = "contact">
        <h1>Contact</h1>
        <p>Connect with me on LinkedIn</p>
        <a
            href = "https://www.linkedin.com/in/zhao-xing-li"
            target="_blank" 
            rel="noopener noreferrer">   
            [LINKEDIN LOGO HERE]   
        </a>
        <p>Have a request? Fill out the form below</p>
        <Form />

        <p>Form logic here</p>
    </div>
}

export default Contact;