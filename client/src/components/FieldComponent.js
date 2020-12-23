import React from 'react';
import '../styles/form.css';

const FieldComponent = ({ input, label, meta: {touched,error} }) => {
    
    return (
        <div className="wrap-div">
            <input {...input} placeholder={label}/>
            <p style={{color:'red'}}>{touched && error}</p>
        </div>
    )
}
export default FieldComponent;