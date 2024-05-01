export const validateDate = ( fechaDeInicio ) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    return regex.test( fechaDeInicio )
}

export const dateBeginValidationMessage = 'Por favor ingrese una fecha de inicio válida'


export const validateDateFinish = ( fechaDeCierre ) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    return regex.test( fechaDeCierre )
}


export const dateFinishValidationMessage = 'Por favor ingrese una fecha de cierre válida'
