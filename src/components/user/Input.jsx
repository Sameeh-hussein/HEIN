import React from 'react'

export default function Input(props) {

    const {id, type, title, value, onChange, errors} = props;

    return (
        <div className="form-group mb-3">
            <label htmlFor={id} style={{ fontSize: '1.1rem' }} >{title}</label>
            <input type={type} className="form-control" id={id} name={id} value={value} onChange={onChange} />
            {errors[id] && <p className='text text-danger'>{errors[id]}</p>}
        </div>
    )
}