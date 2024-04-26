import { useState } from "react"
import { Input } from './Input'
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validateUsername,
    validateUsernameMessage,
    validateConfirPassword,
    validatePassword,
    passwordConfirmationMessage,
    validateName,
    nameValidationMessage,
    lastNameValidationMessage,
    validateLastName
} from '../shared/validators'
import { useRegister } from '../shared/hooks'
import { useNavigate } from "react-router-dom"

import userIcon from '../assets/img/person.png'
import emailIcon from '../assets/img/email.png'
import passwordIcon from '../assets/img/password.png'

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister()
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: {
            value: '',
            isValid: false,
            showError: false
        },
        lastName: {
            value: '',
            isValid: false,
            showError: false
        },
        username: {
            value: '',
            isValid: false,
            showError: false,
        },
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
        passwordConfir: {
            value: '',
            isValid: false,
            showError: false,
        },

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
            case 'name':
                isValid = validateName(value)
                break
            case 'lastName':
                isValid = validateLastName(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'email':
                isValid = validateEmail(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfir':
                isValid = validateConfirPassword(formState.password.value, value)
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

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await register(
                formState.name.value,
                formState.lastName.value,
                formState.username.value,
                formState.email.value,
                formState.password.value
            );
            navigate('/auth');
            switchAuthHandler();
        } catch (error) {

            console.error("Error during registration:", error);
        }
    };

    const isSubmitButtonDisabled = isLoading ||
        !formState.name.isValid ||
        !formState.lastName.isValid ||
        !formState.username.isValid ||
        !formState.email.isValid ||
        !formState.password.isValid ||
        !formState.passwordConfir.isValid;

    return (
        <div className="container">
    <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
    </div>
    <form>
        <div className="inputs">
            <div className="input">
                <img src={userIcon} alt="User Icon" />
                <Input
                    className="input-field"
                    field='name'
                    label='Name'
                    value={formState.name.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.name.showError}
                    validationMessage={nameValidationMessage}
                />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={userIcon} alt="User Icon" />
                <Input
                    className="input-field"
                    field='lastName'
                    label='LastName'
                    value={formState.lastName.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.lastName.showError}
                    validationMessage={lastNameValidationMessage}
                />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={userIcon} alt="User Icon" />
                <Input
                    className="input-field"
                    field='username'
                    label='Username'
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}
                />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={emailIcon} alt="Email Icon" />
                <Input
                    className="input-field"
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='email'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={passwordIcon} alt="Password Icon" />
                <Input
                    className="input-field"
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={passwordIcon} alt="Password Icon" />
                <Input
                    className="input-field"
                    field='passwordConfir'
                    label='ConfirmPassword'
                    value={formState.passwordConfir.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfir.showError}
                    validationMessage={passwordConfirmationMessage}
                />
            </div>
        </div>
        <div className="submit-container">
            <button className="submit" onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                Sign Up
            </button>
            <span className="submit" onClick={switchAuthHandler}>
                Login
            </span>
        </div>
    </form>
</div>

    )
}
