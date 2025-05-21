import  {useCallback, useEffect, useRef, useState} from 'react'
import calendar from '../../../assets/calendar.png'
import TodoItems from "./TodoItems.jsx";

function ToDo() {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")
        ?
        JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();
    const add = ()=> {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    }

    const deleteTodo = useCallback((id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    }, []);

    const toggleTodo = useCallback((id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isCompleted: !todo.isCompleted};
                }
                return todo;
            })

        })
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    },[todoList]);

    return (
        <div className="bg-white place-self-center w-11/12 py-4
         max-w-sm flex flex-col p-7 flex-grow border-2  rounded-xl">
            <div className="flex items-center my-7 gap-2">
                <img className='w-8' src={calendar} alt ='' />
                <h1 className='text-3xl text-gray-700 font-sembold'>To-Do List</h1>
            </div>
            <div className="flex items-center my-7 bg-gray-100 rounded-full">
                <input ref={inputRef} className='bg-transparent  outline-none flex-1 h-14
                 pl-6 pr-2 placeholder:text-slate-600' type= 'text' placeholder= 'Add your task'/>
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg
                 font-medium cursor-pointer'>ADD +</button>
            </div>
            <div>
                {todoList.map((item, index) => {
                    return <TodoItems key={item.id}
                                      text={item.text}
                                      id={item.id}
                                      isCompleted={item.isCompleted}
                                      deleteTodo={deleteTodo}
                                      toggleTodo={toggleTodo}
                    />
                })}
            </div>

        </div>
    )
}

export default ToDo