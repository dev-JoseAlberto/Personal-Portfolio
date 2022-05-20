import React, {useState} from "react";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import {  FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import '../navbar/Navbar.css';



export function Navbar () {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-bar'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiOutlineClose />
                    </Link>
                </li>
                {Sidebar.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icons}
                                <span>{item.tittle}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </>
        


    );
}