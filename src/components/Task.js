import { FaTimes, FaTrash, FaCheck} from "react-icons/fa"
import React, { useState } from 'react';

const Task = ({ task, onDelete, onToggle, completedToggle, priorityToggle }) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() =>
            onToggle(task.id) }  onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
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