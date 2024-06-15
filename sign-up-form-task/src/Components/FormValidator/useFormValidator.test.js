import React from 'react';
import { render } from '@testing-library/react';

describe('useFormValidator', () => {
	it('renders component', () => {
		render(<useFormValidator />);
		const data = {
			email: '',
			password: '',
			confirmPassword: '',
			handleBlur: () => { },
			isFormValidate: () => { },
		}
		expect(data).toBeTruthy();
		expect(data.email).toBe('');
		const blur = data.handleBlur(data.email);
		expect(blur).toBe(undefined);
	});
});
