import Header from "./components/Header";
import Tasks from "./components/Tasks"
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

  return (
    <div className="container">
  <Header />
  <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
