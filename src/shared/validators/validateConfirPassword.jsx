export const validateConfirPassword = (pass, confpass) => {
    return pass === confpass
}

export const passwordConfirmationMessage = 'Las contraseñas no coinciden.'