import React from "react";
import PropTypes from 'prop-types';

// const Button = ({ text, ...rest } ) => <button {...rest} class="btn btn-secondary"></button>;

const Button = ({ text, type, onClick }) => {
    return (
        <button type={type} onClick={onClick} className={`btn btn-${type}`} >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button;

