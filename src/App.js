// import './Container.css';
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";
import {useState} from 'react'
import AddTask from "./Component/AddTask";


function App() {

    const [tasks,setTasks]= useState([
    {
        id:1,
        text:"Go to college",
        day:"feb 5th at 20:22",
        reminder:true
      },
      {
        id:2,
        text:"Don't go to college",
        day:"june 5th at 2:22",
        reminder:true
    }
  ])  

  const [showAddTask,setAddTask]=useState(false) 

  //delete task
  const deletetask=(id)=>{
    setTasks(tasks.filter((task)=> task.id!==id))
  }

  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=> task.id ===id ?{...task,reminder:!task.reminder}: task))
  }

  //AddTask

  const addTask=(task)=>{
    console.log(task)
    const id=Math.floor(Math.random()*1000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" 
      onAdd={()=>setAddTask(!showAddTask) } 
      showAdd={showAddTask}/>
      
      {showAddTask && <AddTask onAdd={addTask }/>}
      
      {tasks.length>0?
      (<Tasks tasks={tasks} onDelete={deletetask} toggle={toggleReminder}/>
      ):(
      'No Tasks to show')}
    </div>
  );
}

export default App;
