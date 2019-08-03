import React from "react";
import PropTypes from 'prop-types';////////////////////////////

// const Button = ({ text, ...rest } ) => <button {...rest} class="btn btn-secondary"></button>;

const TextBox = ({ text, lable }) => {

    return (
        <div>
            <lable for="" >{lable}</lable>
            <input type="text" onChange={onchange}></input>
        </div>

    );
}

TextBox.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,

}


export default TextBox;

