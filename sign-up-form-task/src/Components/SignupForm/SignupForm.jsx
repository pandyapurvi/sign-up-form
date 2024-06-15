import React from 'react';
import styles from './SignupForm.module.css';

export const SignupForm = () => { 
	const [form, setForm] = React.useState({
		email: '',
		name: '',
		password: ''
	});

	const onHandleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	console.log('name', name);
	}

	const onHandleSubmitForm = (e) => { 
		e.preventDefault();
		console.log('form', form);
	
	}
	return (
		<div className={styles.fromContainer}>
			<h1 className={styles.formHeader}>MyWave Sign Up Form</h1>
			<form onSubmit={onHandleSubmitForm} className={styles.form}> 
				<div className={styles.formGroup}>
					<label>Email</label>
					<input
						type="text"
						aria-label="Email field"
						name="email"
						placeholder='Email address'
						value={form.email}
						onChange={onHandleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Password</label>
					<input
						type="password"
						aria-label="Password field"
						name="password"
						placeholder='Password'
						value={form.password}
						onChange={onHandleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Confirm password</label>
					<input
						type="password"
						aria-label="Confirm password field"
						name="confirmPassword"
						placeholder='Confirm password'
						value={form.confirmPassword}
						onChange={onHandleChange}
						required
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default SignupForm;