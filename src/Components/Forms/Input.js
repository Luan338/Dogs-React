import React from 'react';
import styles from './Input.module.css';

const Input = ({label, placeholder, type, name, value, onChange, error, onBlur}) => {
  return(
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input
        id={name} 
        name={name} 
        className={styles.input} 
        placeholder={placeholder} 
        type={type} 
        onChange={onChange} 
        value={value}
        onBlur={onBlur}
        />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  ) 
};

export default Input;
