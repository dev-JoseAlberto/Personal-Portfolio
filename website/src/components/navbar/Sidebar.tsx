import {  FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { MdWorkOutline } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import '../navbar/Navbar.css';



export const Sidebar = [
    {
        tittle:'Home',
        path: '/',
        icons:<AiOutlineHome />,
        cName : 'nav-text'
    },

    {
        tittle:'About',
        path: '/about',
        icons:<ImUser />,
        cName : 'nav-text'
    },

    
    {
        tittle:'Portfolio',
        path: '/portfolio',
        icons:<MdWorkOutline />,
        cName : 'nav-text'
    },

    {
        tittle:'Contact',
        path: '/contact',
        icons:<IoIosContact />,
        cName : 'nav-text'
    },
]