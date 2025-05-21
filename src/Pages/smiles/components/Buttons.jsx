import { useContext } from 'react';
import { SmileContext } from "../../../context/SmileContext.jsx";

export default function Buttons() {
    const { toggleResults, resetVotes, showResults, winner } = useContext(SmileContext);

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-5">
                <button
                    className="p-2.5 rounded-2xl bg-orange-400  font-semibold hover:bg-orange-300 transition-colors duration-300"
                    onClick={toggleResults}>
                    <span className="btn-text">Show result</span>
                </button>

                <button
                    className="p-2.5 rounded-2xl bg-gray-400  font-semibold
                     hover:bg-gray-400 transition-colors duration-300"
                    onClick={resetVotes}>
                    <span>Сбросить голоса</span>
                </button>
            </div>

            {showResults && winner && (
                <div className="w-9/12 flex-1 justify-center items-center bg-green-100
                 dark:bg-green-700 rounded-xl p-4 text-center shadow-md mx-auto my-6">
                    <span className=" text-green-800 dark:text-green-400 font-semibold text-lg">
                        Смайлік переможець: {winner.text} — {winner.votes} голосів
                    </span>
                </div>
            )}
        </>
    );
}