import React from 'react'
import { MdDelete } from "react-icons/md";

function ToDoList(props) {
    return (
        <>
            <div className="toDolist">
                <li>
                    {props.data}
                    <MdDelete className="fas" onClick={()=>{
                        props.del(props.id)
                    }}/>
                </li>
            </div>
        </>
    )
}

export default ToDoList
