import * as yup from 'yup';

export const AddStuffSchema = yup.object({
	photo: yup.mixed().required('Photo is required!'),
	name: yup.string().trim().required('Name is required!'),
	purchase: yup.number().integer().positive('Purchase price must be positive number!').required().typeError('Purchase price is required!'),
	selling: yup.number().integer().positive('Selling price must be positive number!').required().typeError('Selling price is required!'),
	stock: yup.number().integer().positive('Stock must be positive number1').required().typeError('Stock is required!'),
});
