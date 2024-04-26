import './Input.css'

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
    placeholder,
    className // Asegúrate de incluir className en la lista de props
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div className={`input-label ${className}`}> {/* Aplica className aquí */}
                <span>{label}</span>
            </div>
            <div className={`input-field ${className}`}> {/* Aplica className aquí */}
                {textarea ? (
                    <textarea
                        className={`input-textarea ${className}`} // Aplica className aquí
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                        style={{ maxWidth: '400px' }}
                    />
                ) : (
                    <input
                        className={`input-input ${className}`} // Asegúrate de aplicar className aquí también
                        placeholder={placeholder} // Asegúrate de aplicar placeholder aquí
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                )}
                <span className={`input-error ${className}`}> {/* Aplica className aquí */}
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </>
    )
}
