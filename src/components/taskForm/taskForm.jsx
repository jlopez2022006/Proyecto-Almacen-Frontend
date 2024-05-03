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
import "./TaskForm.css"

// comment to commit

export const TaskForm = ({ switchAuthHandler }) => {
    const { postTask, isLoading } = usePostTask();

    const [formState, setFormState] = useState({
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
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        let validationMessage = "";
        switch (field) {
            case "nombreTarea":
                isValid = validateTaskName(value);
                validationMessage = taskNameValidationMessage;
                break;
            case "descripcion":
                isValid = validateDescription(value);
                validationMessage = descriptionValidateMessage;
                break;
            case "fechaDeInicio":
                isValid = validateDate(value);
                validationMessage = dateBeginValidationMessage;
                break;
            case "fechaDeCierre":
                isValid = validateDateFinish(value);
                validationMessage = dateFinishValidationMessage;
                break;
            case "name":
                isValid = validateName(value);
                validationMessage = nameValidationMessage;
                break;
            case "lastName":
                isValid = validateLastName(value);
                validationMessage = lastNameValidationMessage;
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
                validationMessage,
            },
        }));
    }

    const handlePostTask = async (event) => {
        event.preventDefault();
        try {
            await postTask(
                formState.nombreTarea.value,
                formState.descripcion.value,
                formState.fechaDeInicio.value,
                formState.fechaDeCierre.value,
                formState.name.value,
                formState.lastName.value
            );
            // Recarga la página después de agregar la tarea
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const isSubmitButtonDisabled = isLoading
        || !formState.nombreTarea.isValid
        || !formState.descripcion.isValid
        || !formState.fechaDeInicio.isValid
        || !formState.fechaDeCierre.isValid
        || !formState.name.isValid
        || !formState.lastName.isValid;


    return (
        <div className="bg-white  flex items-center my-px">
            <div className="flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1707871935699-d6c1e23a90d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Imagen"
                    className="h-48 w-48 object-cover rounded-full"
                />
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Agregar nueva tarea</h2>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            field="nombreTarea"
                            label="Nombre de la tarea"
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
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            field="fechaDeInicio"
                            label="Fecha de inicio"
                            value={formState.fechaDeInicio.value}
                            onChangeHandler={handleInputValueChange}
                            type="date"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.fechaDeInicio.showError}
                            validationMessage={dateBeginValidationMessage}
                        />
                        <Input
                            field="fechaDeCierre"
                            label="Fecha de cierre"
                            value={formState.fechaDeCierre.value}
                            onChangeHandler={handleInputValueChange}
                            type="date"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.fechaDeCierre.showError}
                            validationMessage={dateFinishValidationMessage}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            field="name"
                            label="Nombre del encargado"
                            value={formState.name.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.name.showError}
                            validationMessage={nameValidationMessage}
                        />
                        <Input
                            field="lastName"
                            label="Apellido del encargado"
                            value={formState.lastName.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.lastName.showError}
                            validationMessage={lastNameValidationMessage}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            onClick={handlePostTask}
                            disabled={isSubmitButtonDisabled}
                            className={`py-3 px-6 rounded-md text-white ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} ${isLoading && 'cursor-not-allowed'}`}
                        >
                            {isLoading ? "Cargando..." : "Crear tarea"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}
