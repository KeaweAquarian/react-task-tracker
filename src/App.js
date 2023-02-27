import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import AgileValues from './components/AgileValues'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task by id
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }



  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

    //Complete Task
    const onCompleted = async (id) => {
      const toggleCompleted = await fetchTask(id)
    
      const upDate = {...toggleCompleted, completed: !toggleCompleted.completed}
      console.log(upDate)
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(upDate),
      })
      const data = await res.json()
      console.log(data)
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: data.completed } : task
         
        )
      )
      
    }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
    // Toggle Priority
    const togglePriority = async (id) => {
      const taskToToggle = await fetchTask(id)
       let valueP = ""

       if (taskToToggle.priority === "low") {
        valueP = 'medium';
      } else if (taskToToggle.priority === "medium"){
        valueP = 'high';
      }else {
        valueP = 'low';
      }

      const updTask = { ...taskToToggle, priority: valueP
 
       }
  
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
  
      const data = await res.json()
  
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, priority: data.priority } : task
        )
      )
    }

  return (
    <Router>
      <div className='container'>

        <Routes>
          <Route
            path='/'
            element={
              <>
                      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    completedToggle={onCompleted}
                    priorityToggle={togglePriority}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/springBacklog' element={
              <>
                <Header title={"Spring Backlog"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    completedToggle={onCompleted}
                    priorityToggle={togglePriority}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route path='/toDo' element={
              <>
                <Header title={"To Do"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    completedToggle={onCompleted}
                    priorityToggle={togglePriority}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route path='/inProgress' element={
              <>
                <Header title={"In Progress"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    completedToggle={onCompleted}
                    priorityToggle={togglePriority}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route path='/done' element={
              <>
                <Header title={"Done"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    completedToggle={onCompleted}
                    priorityToggle={togglePriority}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route
           path='/agileValues'
            element={

            <AgileValues />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App