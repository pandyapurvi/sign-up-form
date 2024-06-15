import {
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
} from './FormValidator';

describe('FormValidator', () => {
  it('should return an error message if email is invalid', () => {
    expect(emailValidator('test')).toBe('Email is invalid');
    expect(emailValidator('test@')).toBe('Email is invalid');
    expect(emailValidator('test@test')).toBe('Email is invalid');
    expect(emailValidator('test@test.')).toBe('Email is invalid');
    expect(emailValidator('')).toBe('Email is required');
  });

  it('should return an error message if password is invalid', () => {
    expect(passwordValidator('')).toBe('Password is required');
    expect(passwordValidator('test')).toBe('Password must be 8 characters');
    expect(passwordValidator('test12345')).toBe(
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    );
  });

  it('should return an error message if passwords do not match', () => {
    expect(confirmPasswordValidator('password@999', 'password@998')).toBe(
      'Passwords do not match'
    );
  });
});
