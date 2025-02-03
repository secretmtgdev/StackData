import React from "react";

import './Button.css';

export type ButtonProps = {
    name: string;
    onClickhandler?: () => {};
}

const Button = (props: ButtonProps) => {
    return (
        <button className='button' onClick={props.onClickhandler}>
            {props.name}
        </button>
    )

};

export default Button;