import { useEffect, useState } from "react"
import { TaskForm } from '../../components/taskForm'
import "./PrincipalPage.css"
import { getTasks as getTasksRequest, updateEstado as updateEstadoRequest, deleteTask as deleteTaskRequest } from '../../services/api.jsx'
import { BsCircleFill, BsFillCheckCircleFill, BsTrashFill } from "react-icons/bs";

export const PrincipalPage = () => {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        getTasksRequest().then(response => {
            if (response.data) {
                setTasks(response.data)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        updateEstadoRequest(id)
    }

    const handleDelete = (id) => {
        deleteTaskRequest(id)
            .then(() => {
                // Filtrar las tareas y actualizar el estado sin esperar la respuesta del servidor
                setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="mx-auto max-w-6xl px-4">
                <h1 className="text-3xl font-bold text-center my-8">Almacenadora</h1>
                <TaskForm />
                {tasks === null ? ( // Verificamos si tasks es null
                    <h2 className="text-center mt-8 text-gray-600">Cargando...</h2>
                ) : tasks.length === 0 ? (
                    <h2 className="text-center mt-8 text-gray-600">No hay tareas</h2>
                ) : (
                    <div className="mt-8">
                        {tasks.map((task, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className={`mr-4 cursor-pointer ${task.estado ? "text-green-500" : "text-gray-600"}`} onClick={() => handleEdit(task._id)}>
                                        {task.estado ? <BsFillCheckCircleFill className="w-6 h-6 mr-2" /> : <BsCircleFill className="w-6 h-6 mr-2" />}
                                        <div>
                                            <h2 className={`font-semibold ${task.estado ? "line-through" : ""}`}>{task.nombreTarea}</h2>
                                            <p className={`text-sm ${task.estado ? "line-through" : ""}`}>{task.descripcion}</p>
                                            <p className={`text-sm ${task.estado ? "line-through" : ""}`}>Inicio: {task.fechaDeInicio}</p>
                                            <p className={`text-sm ${task.estado ? "line-through" : ""}`}>Cierre: {task.fechaDeCierre}</p>
                                            <p className={`text-sm ${task.estado ? "line-through" : ""}`}>{task.name} {task.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(task._id)} className="text-red-500 focus:outline-none">
                                        <BsTrashFill className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );


}
