export const validateTaskName = ( nombreTarea ) => {
    const regex = /^\S{3,25}$/
    return regex.test( nombreTarea )
}

export const taskNameValidationMessage = 'Por favor ingrese la tarea a asignar'