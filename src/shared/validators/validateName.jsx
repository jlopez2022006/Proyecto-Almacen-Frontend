export const validateName = ( name ) => {
    const regex = /^\S{3,12}$/
    return regex.test( name )
}

export const nameValidationMessage = 'Por favor ingresa un nombre de entre 3 y 12 caracteres'