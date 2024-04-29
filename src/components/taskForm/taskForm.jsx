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

import { usePostTask } from "../../shared/hooks/usePostTask";


export const taskForm = ( { switchAuthHandler } ) => {
    const { postTask, isLoading } = usePostTask();

    const [formState, setFormState] = useState( {
        nameTask: {
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
            case "nameTask":
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
        postTask( formState.nameTask.value,
            formState.descripcion.value,
            formState.fechaDeInicio.value,
            formState.fechaDeCierre.value,
            formState.estado.value,
            formState.name.value,
            formState.lastName.value );
    }

    const isSubmitButtonDisabled = isLoading
        || !formState.nameTask.isValid
        || !formState.descripcion.isValid
        || !formState.fechaDeInicio.isValid
        || !formState.fechaDeCierre.isValid
        || !formState.estado.isValid
        || !formState.name.isValid
        || !formState.lastName.isValid;


    return (
        <>
            <div>taskForm</div>
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
            </form>
        </>
    )
}
