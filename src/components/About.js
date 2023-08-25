import { Link, Route, Routes } from "react-router-dom";

function About(){
    return(
        <div>
            <h1>This is my About Page</h1>
            <button><Link to='/home'>Back to home</Link></button>
        </div>
    )
}

export default About;