import { Check, ChevronRight, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Task({tasks, onTaskClick, ondDeleteTaskClick}){
    const navegate = useNavigate()
    
    function onSeeDetailsClick(task){
        const queryStringSet = new URLSearchParams()

        queryStringSet.set("title", task.title)
        queryStringSet.set("description", task.description)

        navegate(`/task?${queryStringSet.toString()}`)
    }
    
    return (
        <ul className="space-y-2 bg-slate-200 p-4 rounded-md shadow">
            {tasks.map(task =>
             
            <li key={task.id} className="flex gap-3">

                <button onClick = { () => onTaskClick(task.id)} className={`
                    bg-slate-400 w-full text-white p-2 rounded-md flex gap-2 items-center 
                    ${task.isCompleted && "line-through"}`}>
                    {task.isCompleted && <Check/>}
                    {task.title}
                </button>

                <button className="bg-green-600  text-white p-2
                 rounded-md" onClick={()=>{
                    onSeeDetailsClick(task)
                 }}>
                    <ChevronRight/>
                </button>

                <button onClick = {() => ondDeleteTaskClick(task.id)} 
                className="bg-red-600  text-white p-2 rounded-md">
                    
                    <TrashIcon/>

                </button>
            </li>)}
        </ul>)
}

export default Task