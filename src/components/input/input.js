import "./input.scss"
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, id, type, onChange, errors, name }) => {

    const isInvalid = !!errors[name];

    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={placeholder} type={type} onChange={onChange} name={name}></input>
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
    name: PropTypes.string
};

export default Input