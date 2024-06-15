export const emailValidator = (email) => {
  if (!email) return 'Email is required';
	else if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid'; // as of now only checking for @ and . in email
	return '';
};

export const passwordValidator = (password) => {
  if (!password) return 'Password is required';
  else if (password.length < 8) return 'Password must be 8 characters';
  else if (password.length > 20)
    return 'Password must be less than 20 characters';
  else if (
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
		!/[0-9]/.test(password) ||
		!/[!@#$%^&*]/.test(password)
  )
    return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
};

export const confirmPasswordValidator = (password, confirmPassword) => {
	if (!confirmPassword) return 'Confirm password is required';
	else if (password !== confirmPassword) return 'Passwords do not match';
}