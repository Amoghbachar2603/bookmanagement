import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h2>📚 Book Review Platform</h2>
            <Link to="/">Home</Link>
        </nav>
    );
};

export default Navbar;
