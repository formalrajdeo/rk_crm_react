import React from 'react'
import { buttonPropsType } from '../types';

const Button = (buttonProps: buttonPropsType) => {
    const { type, value } = buttonProps;

    return (
        <input
            type={type}
            defaultValue={value}
        />
    )
}

export default Button