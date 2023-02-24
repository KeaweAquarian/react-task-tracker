import { FaTrash, FaCheck} from "react-icons/fa"
import React, { useState } from 'react';
// import randomColor from "randomcolor";

const Task = ({ task, onDelete, onToggle, completedToggle, priorityToggle }) => {
    const [isShown, setIsShown] = useState(false);
//   let color = randomColor();
//   console.log(color);
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() =>
            onToggle(task.id) }  onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} style={{backgroundColor : task.color}}>
            <div className={task.priority} onClick={() => priorityToggle(task.id)} ></div>
            <h3 className={` ${task.completed ? "completed" : ""}`}>{task.text} </h3>
            <p>{task.day}</p>
            <div className={` ${isShown ? "icons" : "iconsNoShow"}`}   >
            <FaCheck style={{ color: "green", cursor: "pointer", marginRight: "10px"}}
            onClick={() => completedToggle(task.id)}
            />
            <FaTrash style={{ color: "grey", cursor: "pointer"}}
            onClick={() => onDelete(task.id)}
            />
            </div>

        </div>
    )
}

export default Task