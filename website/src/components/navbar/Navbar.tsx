import { Link } from "react-router-dom";
import '../navbar/Navbar.css';


export function Navbar () {
    return (
        <div className="Navbar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/about">Contact</Link>
            </nav>
        </div>
    );
}