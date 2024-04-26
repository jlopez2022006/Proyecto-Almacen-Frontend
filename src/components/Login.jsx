import { useState } from "react"
import { Input } from './Input'
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validatePassword,
    passwordConfirmationMessage
} from '../shared/validators'
import { useLogin } from '../shared/hooks/useLogin'
import './Login.css'

import email_icon from '../img/email.png'
import user_icon from '../img/person.png'

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin()

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleLogin = (event) => {
        event.preventDefault()

        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid

    return (
        <div className="conteiner">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />

                    <form>

                        <Input
                            field='email'
                            value={formState.email.value}
                            onChangeHandler={handleInputValueChange}
                            type='text'
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.email.showError}
                            validationMessage={emailValidationMessage}
                            placeholder={"Email"}
                        />
                    </form>
                </div>

                <div className="input">
                    <img src={user_icon} alt="" />

                    <form action=""> <Input
                        field='password'
                        value={formState.password.value}
                        onChangeHandler={handleInputValueChange}
                        type='password'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.password.showError}
                        validationMessage={validatePasswordMessage}
                        placeholder={"Contraseña"}
                    /></form>
                </div>
            </div>

            <div className="submit-container">
                <button className="submit" onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Sign Up
                </button>
            </div>

            <div className="forgot-password">No tienes cuenta?-
                <span onClick={switchAuthHandler}>
                    Registrate!
                </span></div>

        </div>
    )
}
