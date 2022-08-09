import * as React from 'react';
import { FC } from 'react';

export interface IButtonProps {
    className: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    onMouseEnter? : (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    onMouseLeave? : (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    children: React.ReactNode
}

const Button: FC<IButtonProps> = ({className, onClick, onMouseEnter, onMouseLeave, children}) => {
    return (
    <button className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</button>
    )
}

export default Button;