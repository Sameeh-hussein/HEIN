import * as yup from 'yup'

export const regiesterValidationScheme = yup.object({
    username: yup.string()
        .required('User Name is Required')
        .min(5, 'Minimum 5 characters')
        .max(15, 'Maximum 15 characters'),
    email: yup.string()
        .required('Email is Required')
        .email(),
    password: yup.string()
        .required('Password is Required')
        .min(12, "Minimum 12 characters")
        .max(30, "Maximum 30 characters"),
    image: yup.string()
              .required('Image is Required'),
});

