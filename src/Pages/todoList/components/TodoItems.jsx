import {memo} from "react";
import delete_icon from '../../../assets/delete_icon.png'
import not_tick from '../../../assets/not_tick.png'
import tick from '../../../assets/tick.png'

const TodoItems= memo(
    function TodoItems ({text, id, isCompleted,deleteTodo, toggleTodo}) {

    return (
        <div className="flex items-center my-3 gap-2">
            <div onClick={()=>{toggleTodo(id)}} className="flex flex-1 items-center cursor-pointer">
                <img className='w-7' src={isCompleted ? tick : not_tick} alt=''/>
                <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
                            ${isCompleted ? 'line-through' : ''}`}>
                    {text}
                </p>
            </div>
            <img onClick={() => {
                deleteTodo(id)
            }} className='w-3.5 cursor-pointer' src={delete_icon} alt=''/>
        </div>
    )
})

export default TodoItems;