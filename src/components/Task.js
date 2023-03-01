import { FaTrash, FaCheck} from "react-icons/fa"
import React, { useState } from 'react';
// import randomColor from "randomcolor";

const Task = ({ task, onDelete,  testedToggle, priorityToggle, progressToggle }) => {
    const [isShown, setIsShown] = useState(false);
    // const [color1, setColor] = useState("#FCFE7C");

    return (
        
        
        <div className={`task ${task.progress}`}  onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} >
            <div className={task.priority} onClick={() => priorityToggle(task.id)} ></div>
            <h3 className={` ${task.tested ? "tested" : ""}`}>{task.feature} </h3>
            <p>{task.userStory}</p>
        {/* To set priority */}
         <select className="progress" value={task.progress} onChange={(e) => 
                progressToggle(task.id, e.target.value)} >
          <option value="notCommited">Not Commited</option>
          <option value="toDo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
            <div className={` ${isShown ? "icons" : "iconsNoShow"}`}   >
            <div className="testedIcons" onClick={() =>  testedToggle(task.id)}>
            <p>Tested?</p>
             <FaCheck className="check" 
            />
            </div>
            

            <FaTrash style={{ color: "grey", cursor: "pointer"}}
            onClick={() => onDelete(task.id)}
            />
            </div>

        </div>
    )
}

export default Task