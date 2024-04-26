export const validateLastName = (lastName) => {
    const regex = /^\S{3,8}$/
    return regex.test(lastName)
}

export const lastNameValidationMessage = 'Por favor ingresa un apellido'