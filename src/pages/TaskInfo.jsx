import { ChevronLeft } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

function TaskInfo(){
    const [searchParams] = useSearchParams()

    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navegate = useNavigate()

    return(
    <div className="w-screen h-screen bg-slate-400 p-6 flex justify-center">
     
        <div className="w-[450px] space-y-4">
            <div className="flex">
                <button onClick={() => navegate(-1)} className="bg-slate-100 rounded-md p-2 text-slate-500">
                      <ChevronLeft/>
                </button>
                <h1 className="w-full text-slate-100 font-bold text-3xl text-center">
                    Detalhes da Tarefa
                </h1> 
            </div>
            <div className="bg-slate-200 p-4 rounded-md">
                <h1 className="text-xl text-slate-600">{title}</h1>
                <p className="text-slate-600">{description}</p>
            </div>
      </div>
    </div>)
}


export default TaskInfo