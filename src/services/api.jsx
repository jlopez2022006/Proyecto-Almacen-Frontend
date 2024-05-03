import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1',
    timeout: 1000
})


export const postTask = async (data) => {
    try {
        return await apiClient.post('/task/agregar', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getTasks = async () => {
    try {
        return await apiClient.get('/task/verTareas')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteTask = async (id) => {
    try {
        return await apiClient.delete(`/task/delete/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updateTask = async (id, data) => {
    try {
        return await apiClient.put(`/task/actualizar/${id}`, data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updateEstado = async (id, data) => {
    try {
        return await apiClient.put(`/task/estado/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

