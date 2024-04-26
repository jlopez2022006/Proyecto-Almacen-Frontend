export const validateName = (name) => {
    const regex = /^\S{3,8}$/
    return regex.test(name)
}

export const nameValidationMessage = 'Por favor ingresa un nombre'