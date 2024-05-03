import { useEffect, useState } from "react"
import { TaskForm } from '../../components/taskForm'
import "./PrincipalPage.css"
import { getTasks as getTasksRequest, updateEstado as updateEstadoRequest, deleteTask as deleteTaskRequest } from '../../services/api.jsx'
import { BsCircleFill, BsFillCheckCircleFill, BsTrashFill } from "react-icons/bs";

export const PrincipalPage = () => {
    const [tasks, setTasks] = useState( [] )

    useEffect( () => {
        getTasksRequest().then( response => {
            if ( response.data ) {
                setTasks( response.data )
            }
        } ).catch( err => console.log( err ) )
    } )

    const handleEdit = ( id ) => {
        updateEstadoRequest( id )
    }

    const handleDelete = ( id ) => {
        deleteTaskRequest( id ).then( response => {
            if ( response.data ) {
                setTasks( response.data )
            }
        } ).catch( err => console.log( err ) )
    }
    return (
        <>
            <div className="principal-page">
                <h1>Almacenadora</h1>
                <TaskForm />
                {
                    tasks.length === 0 ? <h2>No hay tareas</h2> :
                        tasks.map( ( task, index ) => (
                            <div key={index} className="task">
                                <div className="checkbox" onClick={() => handleEdit( task._id )}>
                                    {task.estado ? <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                                        : <BsCircleFill className="icon" />}
                                    <h2 className={task.estado ? "line_through" : ""}>{task.nombreTarea}</h2>
                                    <p className={task.estado ? "line_through" : ""}>{task.descripcion}</p>
                                    <p className={task.estado ? "line_through" : ""}>{task.fechaDeInicio}</p>
                                    <p className={task.estado ? "line_through" : ""}>{task.fechaDeCierre}</p>
                                    <p className={task.estado ? "line_through" : ""}>{task.name}</p>
                                    <p className={task.estado ? "line_through" : ""}>{task.lastName}</p>
                                </div>
                                <div>
                                    <span><BsTrashFill className="icon" onClick={() => handleDelete( task._id )} /></span>
                                </div>
                            </div>
                        ) )
                }
            </div>
        </>
    );
}
