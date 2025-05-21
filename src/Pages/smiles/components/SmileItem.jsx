import { useContext } from 'react';
import { SmileContext } from "../../../context/SmileContext.jsx";

export default function SmileItem({ smile }) {
    const { voteSmiles } = useContext(SmileContext);

    const voteResults = () => {
        voteSmiles(smile.id);
    };
    return (
        <div
            className= 'item-block'
            onClick={voteResults}
            style={{
            }}
        >
            <span>{smile.text}</span>
            <span> Голосів: {smile.votes}</span>
        </div>
    );
}