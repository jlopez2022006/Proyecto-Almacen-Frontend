import axios from "axios";

const apiClient = axios.create( {
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1',
    timeout: 1000
} )


export const postTask = async ( data ) => {
    try {
        return await apiClient.post( '/task/agregar', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const getTasks = async () => {
    try {
        return await apiClient.get( '/task/verTareas' )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}