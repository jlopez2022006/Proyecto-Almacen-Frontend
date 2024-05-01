import { useState } from "react";
import { Input } from "../Input";
import { usePostTask } from "../../shared/hooks/usePostTask";
import {
    validateTaskName,
    taskNameValidationMessage,
    validateDescription,
    descriptionValidateMessage,
    validateDate,
    dateBeginValidationMessage,
    validateDateFinish,
    dateFinishValidationMessage,
    validateState,
    stateValidationMessage,
    validateName,
    nameValidationMessage,
    validateLastName,
    lastNameValidationMessage,

} from "../../shared/validators";



export const TaskForm = ( { switchAuthHandler } ) => {
    const { postTask, isLoading } = usePostTask();

    const [formState, setFormState] = useState( {
        nombreTarea: {
            value: "",
            isValid: false,
            showError: false,
        },
        descripcion: {
            value: "",
            isValid: false,
            showError: false,
        },
        fechaDeInicio: {
            value: "",
            isValid: false,
            showError: false,
        },
        fechaDeCierre: {
            value: "",
            isValid: false,
            showError: false,
        },
        estado: {
            value: "",
            isValid: false,
            showError: false,
        },
        name: {
            value: "",
            isValid: false,
            showError: false,
        },
        lastName: {
            value: "",
            isValid: false,
            showError: false,
        },
    } );

    const handleInputValueChange = ( value, field ) => {
        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        } ) );
    };

    const handleInputValidationOnBlur = ( value, field ) => {
        let isValid = false;
        let validationMessage = "";
        switch ( field ) {
            case "nombreTarea":
                isValid = validateTaskName( value );
                validationMessage = taskNameValidationMessage;
                break;
            case "descripcion":
                isValid = validateDescription( value );
                validationMessage = descriptionValidateMessage;
                break;
            case "fechaDeInicio":
                isValid = validateDate( value );
                validationMessage = dateBeginValidationMessage;
                break;
            case "fechaDeCierre":
                isValid = validateDateFinish( value );
                validationMessage = dateFinishValidationMessage;
                break;
            case "estado":
                isValid = validateState( value );
                validationMessage = stateValidationMessage;
                break;
            case "name":
                isValid = validateName( value );
                validationMessage = nameValidationMessage;
                break;
            case "lastName":
                isValid = validateLastName( value );
                validationMessage = lastNameValidationMessage;
                break;
            default:
                break;
        }

        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
                validationMessage,
            },
        } ) );
    }

    const handlePostTask = ( event ) => {
        event.preventDefault();
        postTask( formState.nombreTarea.value,
            formState.descripcion.value,
            formState.fechaDeInicio.value,
            formState.fechaDeCierre.value,
            formState.estado.value,
            formState.name.value,
            formState.lastName.value );
    }

    const isSubmitButtonDisabled = isLoading
        || !formState.nombreTarea.isValid
        || !formState.descripcion.isValid
        || !formState.fechaDeInicio.isValid
        || !formState.fechaDeCierre.isValid
        || !formState.estado.isValid
        || !formState.name.isValid
        || !formState.lastName.isValid;


    return (
        <>
            <form>
                <Input
                    field="nombreTarea"
                    label="Nombre Tarea"
                    value={formState.nombreTarea.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.nombreTarea.showError}
                    validationMessage={taskNameValidationMessage}
                />
                <Input
                    field="descripcion"
                    label="Descripción"
                    value={formState.descripcion.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.descripcion.showError}
                    validationMessage={descriptionValidateMessage}
                />
                <Input
                    field="fechaDeInicio"
                    label="Fecha de inicio - YYYY/MM/DD"
                    value={formState.fechaDeInicio.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.fechaDeInicio.showError}
                    validationMessage={dateBeginValidationMessage}
                />
                <Input
                    field="fechaDeCierre"
                    label="Fecha de cierre - YYYY/MM/DD"
                    value={formState.fechaDeCierre.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.fechaDeCierre.showError}
                    validationMessage={dateFinishValidationMessage}
                />
                <Input
                    field="estado"
                    label="Estado"
                    value={formState.estado.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.estado.showError}
                    validationMessage={stateValidationMessage}
                />
                <Input
                    field="name"
                    label="Nombre"
                    value={formState.name.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.name.showError}
                    validationMessage={nameValidationMessage}
                />
                <Input
                    field="lastName"
                    label="Apellido"
                    value={formState.lastName.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.lastName.showError}
                    validationMessage={lastNameValidationMessage}
                />
                <div>
                    <button
                        type="submit"
                        onClick={handlePostTask}
                        disabled={isSubmitButtonDisabled}
                    >
                        {isLoading ? "Cargando..." : "Crear tarea"}
                    </button>
                </div>
            </form>
        </>
    )
}
