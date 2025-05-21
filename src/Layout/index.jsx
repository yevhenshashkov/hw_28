import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className=" bg-gray-100 dark:bg-gray-900 transition-colors duration-300 min-h-[100vh]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}