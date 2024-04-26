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
    placeholder
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div>
                <span>{label}</span>
            </div>
            <div>
                {textarea ? (
                    <textarea
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                        style={{ maxWidth: '400px' }}
                    />
                ) : (
                    <input
                        placeholder ={placeholder}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />

                )}
                <span>
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </>
    )
}
