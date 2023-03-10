import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks,setState] = useState([
    {
        id:1,
        text: 'Meeting',
        day:'Saturday 11:00 PM',
        reminder:true,
    },    
])

const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task}
  setState([ ...tasks, newTask])
}

//Delete Task
  const deleteTask = (id) => {
    setState(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) =>{
    setState(tasks.map((task)=>task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container" style={{backgroundColor:'lightblue'}}>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;
