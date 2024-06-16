import SignupForm from "./SignupForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SignupForm", () => {
	it("should render the form", () => {
		render(<SignupForm />);
		expect(screen.getByText('MyWave Sign Up Form')).toBeInTheDocument();
		expect(screen.getByLabelText('Email field')).toBeInTheDocument();
		expect(screen.getByLabelText('Password field')).toBeInTheDocument();
		expect(screen.getByLabelText('Confirm password field')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it("should update the form state when user types", () => {
		render(<SignupForm />);
		const emailInput = screen.getByLabelText('Email field');
		const passwordInput = screen.getByLabelText('Password field');
		const confirmPasswordInput = screen.getByLabelText('Confirm password field');
		fireEvent.change(emailInput, {
			target: { value: 'test12345@gmail.com' }
		});
		fireEvent.change(passwordInput, {
			target: { value: 'Password@1234' }
		});
		fireEvent.change(confirmPasswordInput, {
			target: { value: 'Password@1234' }
		});
	});
	it("should show error message when user left email filed after click", () => {
		render(<SignupForm />);
		const emailInput = screen.getByLabelText('Email field');
		const passwordInput = screen.getByLabelText('Password field');
		const confirmPasswordInput = screen.getByLabelText('Confirm password field');
		fireEvent.blur(emailInput);
		fireEvent.blur(passwordInput);
		fireEvent.blur(confirmPasswordInput);
		expect(screen.getByTestId('emailError')).toHaveTextContent('Email is required');
		expect(screen.getByTestId('passwordError')).toHaveTextContent('Password is required');
		expect(screen.getByTestId('confirmPasswordError')).toHaveTextContent('Confirm password is required');
	});
	it("should show error message when user add invalid email", () => {
		render(<SignupForm />);
		const emailInput = screen.getByLabelText('Email field');
		fireEvent.change(emailInput, {
			target: { value: 'test' }
		});
		fireEvent.blur(emailInput);
		expect(screen.getByTestId('emailError')).toHaveTextContent('Email is invalid');
	});
	it("should show error message when user add invalid password", () => {
		render(<SignupForm />);
		const passwordInput = screen.getByLabelText('Password field');
		fireEvent.change(passwordInput, {
			target: { value: 'test123' }
		});
		fireEvent.blur(passwordInput);
		expect(screen.getByTestId('passwordError')).toHaveTextContent('Password must be 8 characters');
	});
	it("should show text when sunmit button is clicked", () => {
		render(<SignupForm />);
		const emailInput = screen.getByLabelText('Email field');
		const passwordInput = screen.getByLabelText('Password field');
		const confirmPasswordInput = screen.getByLabelText('Confirm password field');
		const submitBtn = screen.getByRole('button');
		fireEvent.change(emailInput, {
			target: { value: 'test123@test.com' }
		});
		fireEvent.change(passwordInput, {
			target: { value: 'Password@1234' }
		});
		fireEvent.change(confirmPasswordInput, {
			target: { value: 'Password@1234' }
		});
		fireEvent.click(submitBtn);
		expect(screen.getByText('Form is submitted successfully!!')).toBeInTheDocument();
	})
});