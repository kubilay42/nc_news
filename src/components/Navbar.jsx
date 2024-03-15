import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
    return(<>
    <Link to="/articles" className="nav-link">
        <button><h2>See All Articles</h2></button>
    </Link>
    <br></br>
    <br></br>
    <Link to="/users" className="nav-link">
    <button><h4>Select User</h4></button>
    </Link>
    <Link to="/" className="nav-link">
    <button><h4>Home</h4></button>
    </Link>
    </>
    )
}

export default Navbar;
