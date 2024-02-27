import { useFormik } from 'formik';
import React, { useState } from 'react'
import Input from './Input';
import {loginValidationScheme} from '../Validate'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = data => {
        //send log in credentials to database
        // await axios.post('endpoint', data)

        //if response was success
        navigate('/home')
    }

    const formik = useFormik(
        {
          initialValues,
          onSubmit,
          validationSchema: loginValidationScheme
        }
    )

    const inputs = [
        {
            id: 'email',
            title: 'Email',
            type: 'text',
            value: formik.values.email,
          },
        {
            id: 'password',
            title: 'Password',
            type: 'password',
            value: formik.values.password,
        },
    ];

    const renderInputs = inputs.map((input, index) =>
    <Input
      key={index}
      id={input.id}
      title={input.title}
      type={input.type}
      value={input.value} 
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  

  )
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-center" style={{ fontSize: '1.2rem' }}>Login</div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                {renderInputs}
                                <button type="submit" className="btn btn-dark">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
