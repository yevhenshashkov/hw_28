import {createContext, useState, useCallback, useMemo, useEffect} from "react";

export const SmileContext = createContext(null);

export default function SmileProvider ({ children }) {
    const [smiles, setSmiles] = useState([
        { id: 1, text: "🤑", votes: 0 },
        { id: 2, text: "🙄", votes: 0 },
        { id: 3, text: "🤐", votes: 0 },
        { id: 4, text: "🤓", votes: 0 },
        { id: 5, text: "🤔", votes: 0 }
    ]);

    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const savedSmiles = localStorage.getItem("smiles");
        if (savedSmiles) {
            setSmiles(JSON.parse(savedSmiles));
        }
    }, []);

    const voteSmiles = useCallback((id) => {
        setSmiles(prevSmiles => {
            const updatedSmiles = prevSmiles.map(smile =>
                smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
            );
            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
            return updatedSmiles;
        });
    }, []);

    const showWinner = useCallback((smiles) => {
        const maxVotes = Math.max(...smiles.map(smile => smile.votes));
        if (maxVotes === 0) return null;
        return smiles.find(smile => smile.votes === maxVotes);
    }, []);

    const toggleResults = useCallback(() => {
        setShowResults(prevShow => {
            setWinner(prevShow ? null : showWinner(smiles));
            return !prevShow;
        });
    }, [smiles, showWinner]);

    const resetVotes = useCallback(() => {
        const resetSmiles = smiles.map(smile => ({
            ...smile,
            votes: 0
        }));

        setSmiles(resetSmiles);
        setShowResults(false);
        setWinner(null);
        localStorage.removeItem("smiles");
    }, []);


    const contextValue = useMemo(() => ({
        smiles,
        voteSmiles,
        toggleResults,
        resetVotes,
        showResults,
        winner,
    }), [smiles, voteSmiles, toggleResults, resetVotes, showResults, winner]);

    return(
        <SmileContext.Provider value={contextValue}>
            {children}
        </SmileContext.Provider>
    )
}