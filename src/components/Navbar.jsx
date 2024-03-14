import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
    return(<>
    <Link to="/articles" className="nav-link">
        All Articles
    </Link>
    <Link to="/users" className="nav-link">
    Users
    </Link>
    <Link to="/" className="nav-link">
    Home
    </Link>
    </>
    )
}

export default Navbar;
