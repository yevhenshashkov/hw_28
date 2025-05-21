import {useContext} from 'react';
import { SmileContext } from "../../../context/SmileContext.jsx";
import SmileItem from './SmileItem';


export default function SmileList() {
    const { smiles } = useContext(SmileContext);

    return (
        <div className='flex flex-col items-center justify-center gap-5 place-self-center w-[800px] text-xl my-4'>
            {smiles.map(smile => (
                <SmileItem
                    key={smile.id}
                    smile={smile}
                />
            ))}
        </div>
    );
}