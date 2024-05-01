import { useEffect } from "react"
import { TaskForm } from '../../components/taskForm'
export const PrincipalPage = () => {
    return (
        <>
            <div className="principal-page">
                <h1>Principal Page</h1>
                <TaskForm />
            </div>
        </>
    );
}
