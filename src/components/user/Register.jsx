import React, { useState } from 'react'
import Input from './Input';
import { useFormik } from 'formik';

export default function Register() {

  const formik = useFormik(
    {
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      onSubmit: values => { 
        console.log(values) 
      },
      validate: values => {
        const errors = {}
        if (!values.username) {
          errors.username = 'User Name is Required'
        }
        if (!values.email) {
          errors.email = 'Email is Required'
        }
        if (!values.password) {
          errors.password = 'Password is Required'
        }
        return errors
      }
    }
  )


  const inputs = [
    {
      id: 'username',
      title: 'User Name',
      type: 'text',
      value: formik.values.username,
    },
    {
      id: 'email',
      title: 'Email',
      type: 'email',
      value: formik.values.email,
    },
    {
      id: 'password',
      title: 'Password',
      type: 'password',
      value: formik.values.password,
    }
  ];

  const renderInputs = inputs.map((input, index) =>
    <Input
      key={index}
      id={input.id}
      title={input.title}
      type={input.type}
      value={input.value} 
      errors={formik.errors}
      onChange={formik.handleChange} />
  )

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header d-flex justify-content-center" style={{ fontSize: '1.2rem' }} >Register</div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>

                {renderInputs}

                <button type="submit" className="btn btn-dark">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
