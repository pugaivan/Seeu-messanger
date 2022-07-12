import "./input.scss"
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, id, type, onChange, errors, name, children }) => {
    const isInvalid = !!errors[name];

    return (
        <div className={`input-container ${isInvalid && "is-invalid"}`}>
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={placeholder} type={type} onChange={onChange} name={name}></input>
            {(children || isInvalid) && <div className="input-button">{isInvalid ? <img src="/images/warning.png" width="25px" height="25px" className="warning-icon" /> : children}</div>}
            {isInvalid && (<h4>{errors[name].message}</h4>)}
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    errors: PropTypes.object,
    name: PropTypes.string,
    children: PropTypes.node
};

export default Input