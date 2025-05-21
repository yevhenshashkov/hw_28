import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import logo_dark from "../../assets/logo_dark.png";
import logo_light from "../../assets/logo_light.png";
import night from "../../assets/night.png";
import day from "../../assets/day.png";
import '../stylesTheme.css';

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="w-full flex items-center justify-between py-3.5 px-10 mb-3.5 border-b-2">
            <NavLink to="/">
                <img
                    className='w-12 cursor-pointer bg-white'
                    src={theme === "dark" ? logo_light : logo_dark}
                    alt='logo'/>
            </NavLink>
            <ul className='flex-1 text-center [&>li]:inline-block [&>li]:py-[10px] [&>li]:px-[20px]
             [&>li]:text-[20px] [&>li]:cursor-pointer [&>li:hover]:text-orange-600 transition-all'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="/todoList">ToDooshka</NavLink></li>
            </ul>
            <img
                onClick={toggleTheme}
                className="w-12 cursor-pointer"
                src={theme === "light" ? night : day}
                alt="theme toggle"
            />
        </div>
    )
}