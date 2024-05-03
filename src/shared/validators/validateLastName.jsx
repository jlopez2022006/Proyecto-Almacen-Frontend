export const validateLastName = ( lastName ) => {
    const regex = /^\S{3,12}$/
    return regex.test( lastName )
}

export const lastNameValidationMessage = 'Por favor ingresa un apellido entre 3 y 8 caracteres'