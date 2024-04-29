import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTask as postTaskRequest } from "../../services";
import toast from "react-hot-toast";

export const usePostTask = () => {
    const [isLoading, setIsLoading] = useState( false )

    const navigate = useNavigate()

    const postTask = async ( nombreTarea,
        descripcion,
        fechaDeInicio,
        fechaDeCierre,
        estado,
        name,
        lastName ) => {
        setIsLoading( true )

        const response = await postTaskRequest( {
            nombreTarea,
            descripcion,
            fechaDeInicio,
            fechaDeCierre,
            estado,
            name,
            lastName
        } )
        setIsLoading( false )

        if ( response.error ) {
            return toast.error( response.e?.response?.data ) || 'Ocurrió un error al crear la tarea, intenta de nuevo.'
        }

        navigate( '/' )
    }

    return {
        postTask,
        isLoading
    }
}