export const validateDate = ( fechaDeInicio ) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    if ( !regex.test( fechaDeInicio ) ) {
        return false
    }
}

export const dateBeginValidationMessage = 'Por favor ingrese una fecha de inicio válida'


export const validateDateFinish = ( fechaDeCierre ) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    if ( !regex.test( fechaDeCierre ) ) {
        return false
    }
}


export const dateFinishValidationMessage = 'Por favor ingrese una fecha de cierre válida'
