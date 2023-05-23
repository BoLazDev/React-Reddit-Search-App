function CustomInput(props) {
    const { type, label, value, id, name, className, onChange } = props;

    return (
        <div className="form-floating mt-3">
            <input
                type={type}
                className={`form-control ${className}`}
                id={id}
                name={name}
                placeholder={label}
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default CustomInput;