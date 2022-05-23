import {  FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { MdWorkOutline } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import '../navbar/Navbar.css';



export const Sidebar = [
    {
        title:'Home',
        path: '/',
        icon:<AiOutlineHome />,
        cName : 'nav-text'
    },

    {
        title:'About',
        path: '/about',
        icon:<ImUser />,
        cName : 'nav-text'
    },

    
    {
        title:'Portfolio',
        path: '/portfolio',
        icon:<MdWorkOutline />,
        cName : 'nav-text'
    },

    {
        title:'Contact',
        path: '/contact',
        icon:<IoIosContact />,
        cName : 'nav-text'
    },
]