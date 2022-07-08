import "./button.scss";
import PropTypes from 'prop-types';

const Button = ({ text }) => {
    return (
            <div className="button-container">
                <button>{text}</button>
            </div>
            
    )
}


Button.propTypes = {
    text: PropTypes.string
  };

export default Button