import { Link, Outlet } from "react-router-dom";
// Add a footer to this page as well.

function Landing(){
    return(
        <div>
            <nav>
                <button><Link to="/quotes">Home</Link></button>
                <button><Link to="/about">About</Link></button>
            </nav>
            {/* Add the outlet tags */}
            <Outlet></Outlet>
        </div>
    )
}


export default Landing;