import { useNavigate } from "react-router";
import '../../Layout/stylesTheme.css';

export default function About() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/Home");
    }

    return (
        <div >
            <h1>This is my project with router:</h1>
            <button className='p-2.5 rounded-2xl bg-gray-400  font-semibold
                     hover:bg-gray-400 transition-colors duration-300'
                    onClick={goHome}>Go back</button>
        </div>
    )
}