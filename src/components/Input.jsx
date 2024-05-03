import './Input.css'

export const Input = ( {
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
    className
} ) => {
    const handleValueChange = ( event ) => {
        onChangeHandler( event.target.value, field )
    }

    const handleInputBlur = ( event ) => {
        onBlurHandler( event.target.value, field )
    }

    return (
        <>
            <div className={`input-label ${className}`}>
                <span>{label}</span>
            </div>
            <div className={`input-field ${className}`}>
                {textarea ? (
                    <textarea
                        className={`input-textarea ${className}`}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                        style={{ maxWidth: '400px' }}
                    />
                ) : (
                    <input
                        className={`input-input ${className}`}
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                )}
                <span className={`input-error ${className}`}>
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </>
    )
}
