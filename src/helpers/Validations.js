import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

export const StuffSchema = yup.object({
	photo: yup.mixed().required('Photo is required!'),
	name: yup.string().trim().required('Name is required!'),
	purchase: yup
		.number()
		.integer()
		.positive('Purchase price must contain positive number!')
		.required('Purchase price is required!')
		.typeError('Purchase price is required!'),
	selling: yup
		.number()
		.integer()
		.positive('Selling price must contain positive number!')
		.required('Selling price is required!')
		.typeError('Selling price is required!'),
	stock: yup
		.number()
		.integer()
		.positive('Stock must contain positive number1')
		.required('Stock is required!')
		.typeError('Stock is required!'),
});

export const LoginSchema = yup.object({
	email: yup.string().email('Email must be valid email!').trim().required('Email is required!'),
	password: yup.string().trim().required('Password is required!'),
});

export const RegisterSchema = yup.object({
	name: yup
		.string()
		.required('Name is required!')
		.min(8, (props) => `Name must be at least ${props.min} characters`)
		.max(40, (props) => `Name must be less then ${props.max} characters`)
		.trim(),
	email: yup
		.string()
		.max(50, (props) => `Email must be less then ${props.max} characters`)
		.email('Email must be valid!')
		.trim()
		.required('Email is required!'),
	password: yup
		.string()
		.password()
		.required('Password is required!')
		.minLowercase(1, 'Password must contain at least 1 lowercase letters')
		.minUppercase(1, 'Password must contain at least 1 uppercase letters')
		.minNumbers(1, 'Password must contain at least 1 number')
		.minSymbols(1, 'Password must contain at least 1 symbol')
		.min(8, 'Password must be at least 8 characters'),
	confirm: yup
		.string()
		.oneOf([yup.ref('password'), null], "Password doesn't match!")
		.required('Confirm Password is required!'),
});
