import {useState} from "react";

import checkImg from '../assets/check.png';
import checkedImg from '../assets/checked.png';
import trash from '../assets/trash.png';

const TodoItem = (props: any) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex flex-row p-5 w-full bg-[var(--gray-500)] m-2 justify-between rounded-lg">
            <div className="flex w-full">
                <img className="w-5 h-5 mt-1" onClick={() => setChecked(!checked)} src={!checked ? checkImg : checkedImg} alt=""/>
                <h1 className="ml-2 md:ml-5 text-left" style={{textDecoration: checked ? 'line-through' : 'none', color: checked ? 'var(--gray-300)' : 'var(--gray-100)'}}>{props.todoContent}</h1>
            </div>
            <img src={trash} onClick={props.deleteTodo} className="float-end w-5 h-5" alt=""/>
        </div>
    )
}

export default TodoItem