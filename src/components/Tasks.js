
import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle, completedToggle, priorityToggle}) => {
    
    return (
        <>

        {tasks.map((task) => (
        <Task key={task.id} 
        task={task} 
        onDelete= {onDelete}
        onToggle={onToggle}
        completedToggle={completedToggle}
        priorityToggle={priorityToggle}
        />
        ))}
        </>
    )
}

export default Tasks