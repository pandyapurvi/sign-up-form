import { useState, useEffect } from 'react';
import {
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
} from './FormValidator';

export const useFormValidator = (form) => {
  const { email, password, confirmPassword } = form;
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    const newErrors = {
      email: touched.email ? emailValidator(email) : '',
      password: touched.password ? passwordValidator(password) : '',
      confirmPassword: touched.confirmPassword
        ? confirmPasswordValidator(password, confirmPassword)
        : '',
    };
    setErrors(newErrors);
	}, [email, password, confirmPassword, touched]);
	
// To handle onBlur event
  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
	};
	
// To check if form is valid
  const isFormValidate = () => {
    return (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      email &&
      password &&
      confirmPassword
    );
  };
  return { errors, handleBlur, isFormValidate };
};
