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
	})
})