import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { useFormValidator } from '../FormValidator/useFormValidator';

export const SignupForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isValid, setValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

	// To handle form input change
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

	// calling useFormValidator hook to vlaidate form
  const { errors, handleBlur, isFormValidate } = useFormValidator(form);

  const onHandleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (isFormValidate()) {
      setValid(true);
    } else {
      setValid(false);
    }
	};
	
  return (
    <div className={styles.fromContainer}>
      <h1 className={styles.formHeader}>MyWave Sign Up Form</h1>
      <form onSubmit={onHandleSubmitForm} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.formInput}
            type="text"
            aria-label="Email field"
            name="email"
            placeholder="Your email address"
            value={form.email}
            onChange={onHandleChange}
            onBlur={() => handleBlur('email')}
          />
          {errors.email ? (
            <p className={styles.errorMessage} data-testid='emailError'>{errors.email}</p>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.formInput}
            type="password"
            aria-label="Password field"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={onHandleChange}
            onBlur={() => handleBlur('password')}
          />
          {errors.password ? (
            <p className={styles.errorMessage} data-testid='passwordError'>{errors.password}</p>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Confirm password</label>
          <input
            className={styles.formInput}
            type="password"
            aria-label="Confirm password field"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={onHandleChange}
            onBlur={() => handleBlur('confirmPassword')}
          />
          {errors.confirmPassword ? (
            <p className={styles.errorMessage} data-testid='confirmPasswordError'>{errors.confirmPassword}</p>
          ) : null}
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
          {isValid ? (
            <p className={styles.submitMessage}>
              Form is submitted successfully!!
            </p>
					) : null}
					{/* When click on form when all fields are empty, show the below message */}
          {isSubmitted && !isValid ? (
            <p className={styles.submitMessage}> All fields are required!!</p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
