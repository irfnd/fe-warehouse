import * as yup from 'yup';

export const StuffSchema = yup.object({
	photo: yup.mixed().required('Photo is required!'),
	name: yup.string().trim().required('Name is required!'),
	purchase: yup
		.number()
		.integer()
		.positive('Purchase price must be positive number!')
		.required('Purchase price is required!')
		.typeError('Purchase price is required!'),
	selling: yup
		.number()
		.integer()
		.positive('Selling price must be positive number!')
		.required('Selling price is required!')
		.typeError('Selling price is required!'),
	stock: yup.number().integer().positive('Stock must be positive number1').required('Stock is required!').typeError('Stock is required!'),
});
