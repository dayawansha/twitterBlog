import React from "react";
import PropTypes from 'prop-types';

// const Button = ({ text, ...rest } ) => <button {...rest} class="btn btn-secondary"></button>;

const Editor = ({text, onChange }) => {

    return (
        <textarea text={text}  onChange={onChange} >
        </textarea>
    );
}

Editor.propTypes={
    text:PropTypes.string,
    onChange:PropTypes.func,

}


export default Editor;

