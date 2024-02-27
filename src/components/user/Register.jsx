import React, { useState } from 'react'
import Input from './Input';
import { useFormik } from 'formik';
import {regiesterValidationScheme} from '../Validate'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    image: ''
  };

  const onSubmit = (data) => {
    const userData = new FormData();
    userData.append('username', data.username);
    userData.append('email', data.email);
    userData.append('password', data.password);
    userData.append('image', data.image);

    //now send User Data to backend
    //axios.post('endpoint', userData);

    //if response was success
    navigate('/login');
  }

  const formik = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: regiesterValidationScheme
    }
  )

  const handelFieldChange = (event) => {
    formik.setFieldValue('image',  event.target.files[0]);
  }

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
      type: 'text',
      value: formik.values.email,
    },
    {
      id: 'password',
      title: 'Password',
      type: 'password',
      value: formik.values.password,
    },
    {
      id: 'image',
      title: 'Image',
      type: 'file',
      onchange: handelFieldChange,
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
      onChange={input.onchange || formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  )

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header d-flex justify-content-center" style={{ fontSize: '1.2rem' }} >Register</div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

                {renderInputs}

                <button type="submit" disabled={!formik.isValid} className="btn btn-dark">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
