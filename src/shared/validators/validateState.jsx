export const validateState = ( estado ) => {
    const validEstados = ['SIN INICIAR', 'EN PROCESO', 'COMPLETADO']
    return validEstados.includes( estado )
}

export const stateValidationMessage = 'Por favor selecciona un estado válido'