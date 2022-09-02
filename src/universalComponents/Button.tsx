import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = ({ name, callback }) => {

    const onClickHandler = () => {
        callback();
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

export default Button;