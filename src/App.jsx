import js from "@eslint/js";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { useEffect, useState } from "react";


function App() {
  const [lista, addList] = useState(["ag", "ss"])
  const [tasks, setTask] = useState( JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const getAPI = async () => {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        method: "GET"
      })

      const json = await response.json()
      return json

    }catch(error){
        console.log({error})
    }
  }

  useEffect(()=>{

    const getAPI = async () => {
      try{
        // Aqui vamos chamar api
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
          method: "GET"
        })
      
        // Pegar os dados que retorna
        const json = await response.json()
       

        // salvar/persistir o retorno no UseState()
        setTask(json)


        }catch(error){
          console.log({error})
        }
    }
    // getAPI()


  }, []) // Quando usamos useEffect com com uma lista vazia como  parametro, o use effect será executada apenas quando 
  // aplicação rodar pela primeira vez.

  function onTaskClick(idTask){
  
    const newTask = tasks.map(task =>{
      if(idTask === task.id){
        return {...task, isCompleted: !task.isCompleted}
      }

      return task
    })

    setTask(newTask)
  }

  function ondDeleteTaskClick(idTask){
  
    const newTask = tasks.filter(task => task.id !== idTask)

    setTask(newTask)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }

    setTask([...tasks, newTask])
  }
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 " >
      <div className="w-[450px] space-y-4">

        <h1 className="text-slate-100 font-bold text-3xl text-center">
            Gestor de Tarefas
        </h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>

        <Task 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          ondDeleteTaskClick={ondDeleteTaskClick}
        />

      </div>
    </div>
  )
}

export default App;