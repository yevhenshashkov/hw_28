import { Routes, Route, Navigate } from "react-router-dom";
import ToDo from "./Pages/todoList/components/ToDo.jsx";
import Layout from "./Layout";
import Contacts from "./Pages/contacts/index.jsx";
import About from "./Pages/about/index.jsx";
import Smile from "./Pages/smiles/Smiles.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Smile/>}/>
                <Route path="contacts" element={<Contacts />} />
                <Route path="about" element={<About />} />
                <Route path="todoList" element={<ToDo />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}