import { useState } from "react"
import randomColor from "randomcolor";


const AddTask = ({onAdd}) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [priority, setPriority] = useState("low")
    const [color, setColor] = useState(randomColor())
    
    const onSubmit = (e => {
        e.preventDefault()
        //  const rand = Math.floor(Math.random()* 8);
        // const myArray = ['#9AD9DB', '#98D4BB', '#EB96AA', '#F27348','#2CCED2','#4382BB','#A15D98','#F4C815 '];
        //  let color = myArray[rand];
        //  console.log(rand);
        //  console.log(color);

        if(!text){
            alert("Please add task")
            return
        }
        
        onAdd ({text, day, reminder, completed, priority, color})

        setText("")
        setDay("")
        setReminder(false)
        setCompleted(false)
        setPriority("low")
        setColor(randomColor())

    })
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text} onChange={(e) => 
            setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="day" placeholder="Add Day and Time"
            value={day} onChange={(e) => 
                setDay(e.target.value)} />
        </div>
    
        <h5>Priority</h5>
      {/* To set priority */}
         <select id="priority" value={priority} onChange={(e) => 
                setPriority(e.target.value)} >
          
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" 
            checked={reminder}
            value={reminder} onChange={(e) => 
            setReminder(e.currentTarget.checked)} />
        </div>

        <input type="submit" value ="Save Task"  className="btn btn-block"/>
        
      </form>
    )
  }


export default AddTask
