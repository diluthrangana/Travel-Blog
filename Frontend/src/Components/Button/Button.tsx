import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
    LinkText: string;
    LinkTo: string;
}

const Button: React.FC<ButtonProps> = ({ LinkText, LinkTo }) => {
    return (
        
        <Link to={LinkTo} className={styles.Btn}>
            {LinkText}
        </Link>
    ) 
}

export default Button;
