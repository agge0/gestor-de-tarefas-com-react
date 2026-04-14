import { useState } from "react"
import "../App.css"
import MyInput from "./MyInput"

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-2 bg-slate-200 p-4 rounded-md shadow flex flex-col">
            <MyInput
             type="text" 
             placeholder="Digite o titulo da tarefa" value={title}  onChange={(e) =>  
                setTitle(e.target.value)}/>

            <MyInput 
             type="text" placeholder="Digite a discrição da tarefa" 
             value={description} onChange={(e) =>  
             setDescription(e.target.value)}/>

            <button className="bg-slate-500 text-white 
                px-4 py-2 rounded-md font-medium" onClick = {() => {

                if(!title.trim() || !description.trim()){
                    return alert("Campo vázio!")
                }

                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")

                }}>
             Adicionar
            </button>
        </div>
    )
}

export default AddTask