import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"doctor",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id:2,
        text:"doctor2",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id:3,
        text:"doctor3",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    }
])

//Add task
const addTask = (task) => {
  console.log(task)
}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id
  ? { ...task, reminder: !task.reminder}  : task
  ))
}

  return (
    <div className="container">
  <Header />
  <AddTask onAdd={addTask} />
  {tasks.length > 0 ? <Tasks tasks={tasks} 
  onDelete= {deleteTask} onToggle={toggleReminder}
  /> : "No tasks"}
    </div>
  );
}

export default App;
