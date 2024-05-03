import { useEffect, useState } from "react"
import { TaskForm } from '../../components/taskForm'
import "./PrincipalPage.css"
import { getTasks as getTasksRequest } from '../../services/api.jsx'
import { BsCircleFill, BsTrashFill } from "react-icons/bs";

export const PrincipalPage = () => {
    const [tasks, setTasks] = useState( [] )

    useEffect( () => {
        getTasksRequest().then( response => {
            if ( response.data ) {
                setTasks( response.data )
            }
        } ).catch( err => console.log( err ) )
    } )
    return (
        <>
            <div className="principal-page">
                <h1>Almacenadora</h1>
                <TaskForm />
                {
                    tasks.length === 0 ? <h2>No hay tareas</h2> :
                        tasks.map( ( task, index ) => (
                            <div key={index} className="task">
                                <div className="checkbox">
                                    <BsCircleFill className="icon" />
                                    <h2>{task.nombreTarea}</h2>
                                    <p>{task.descripcion}</p>
                                    <p>{task.fechaDeInicio}</p>
                                    <p>{task.fechaDeCierre}</p>
                                    <p>{task.name}</p>
                                    <p>{task.lastName}</p>
                                </div>
                                <div>
                                    <span><BsTrashFill className="icon" /></span>
                                </div>
                            </div>
                        ) )
                }
            </div>
        </>
    );
}
