import {Link} from "react-router-dom";


const About = () => {
    return (
        <>
        <h1>Personal Scrum Board</h1>
        <h2>Current Project</h2>
        <p>Habbit Chaining Daily Planner</p>

        <h3>Scrum Boared Controls</h3>
         <ul>
             <li>Use add button to create new tasks</li>
             <li>Describe the feature required and purpose for the user</li>
             <li>Set task priority</li>
             <li>Priority colors: blue = low, green = medium, red = high </li>
             <li>Priority can be changed by clicking priority color</li>
             <li>Producd Backlog contains all tasks</li>
             <li>Spring backlog contains tasks currently active during sprint</li>
             <li>Once a task is completed it can be marked as tested</li>
        </ul> 

    
        <Link to="/">Go Back</Link>
      
        </>

    )
  }

  export default About
