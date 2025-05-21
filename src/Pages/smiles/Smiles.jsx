import VoteHeader from "./components/Header";
import SmileList from "./components/SmileList";
import Buttons from "./components/Buttons";
import SmileProvider from "../../context/SmileContext.jsx";
import '../../Layout/stylesTheme.css';



export default function Smile() {
    return (
        <SmileProvider>
            <div >
                <VoteHeader />
                <SmileList />
                <Buttons />
            </div>
        </SmileProvider>
    )
}