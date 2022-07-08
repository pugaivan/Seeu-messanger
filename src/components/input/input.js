import "./input.scss"
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, id, type , onChange, errors }) => {
    return (
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <input  id={id} placeholder={placeholder} type={type} onChange={onChange}></input>
                <h4>{errors}</h4>
            </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
  };

export default Input