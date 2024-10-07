import AddIcon from '../assets/plus.png'
import clipboard from '../assets/Clipboard.png'

import {useState, useRef, useEffect} from 'react'

import TodoItem from "../components/TodoItem.tsx";

// @ts-expect-error ---
const HomePage = ({userToken}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const todos = [
        'feed the cats',
        'kill the cats',
        'pet Aino on the head',
        'give Aino a kiss on the left cheek',
        'feed the cats',
        'kill the cats',
        'pet Aino on the head',
        'give Aino a kiss on the left cheek'
    ];

    const addTodoItem = () => {

    }

    return (
        <div className="max-w-screen-lg flex flex-col justify-center relative mx-auto">
            <div className="flex justify-center space-x-2 absolute mb-24 w-full">
                <input ref={inputRef} type="text" className="w-full rounded-md px-5 h-12 outline-none bg-[var(--gray-500)] text-[var(--gray-200)]" placeholder="Enter Todo" />
                <button onClick={addTodoItem} type="submit" className="bg-[var(--blue)] text-white px-5 rounded-md h-12 flex justify-center items-center"><span className="hidden sm:block">Add</span>
                    <img src={AddIcon} className="sm:ml-2" alt=""/></button>
            </div>


            <div className="flex flex-col w-full h-full relative">
                <div className="flex mt-14 justify-between">
                    <div className="flex flex-row w-fit">
                        <h1 className="text-[var(--blue)] font-bold text-">Tasks Created</h1>
                        <span className="bg-[var(--gray-400)] text-[var(--gray-200)] px-2 sm:px-3 rounded-2xl ml-2">0</span>
                    </div>

                    <div className="flex flex-row w-fit">
                    <h1 className="text-[var(--purple)] font-bold text-">Finished Tasks</h1>
                        <span className="bg-[var(--gray-400)] text-[var(--gray-200)] px-2 sm:px-3 rounded-2xl ml-2">0</span>
                    </div>
                </div>



                {/* If there are no todos */}
                { (todos.length == 0) ?
                <div
                    className="border-t border-t-[#333333] rounded-xl w-full flex flex-col justify-center items-center mt-5 text-center pt-20">
                    <img className="w-fit mt-30" src={clipboard} alt=""/>
                    <h1 className="text-[var(--gray-300)] mt-5">
                        You don't have any tasks registered yet<br/>
                        <span className="font-bold">Create tasks and organize your to-do items</span>
                    </h1>
                </div>

                :

                <div className="w-full flex flex-col justify-center items-center text-center overflow-y-auto overflow-x-clip h-96 absolute top-24 pt-60">
                    {
                        todos.map((item, key) => {
                            return <TodoItem todoContent={item} key={key}/>
                        })
                    }
                </div>
                }
            </div>
        </div>
    )
}

export default HomePage