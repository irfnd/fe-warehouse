// Components
import AuthLayout from '@/components/layouts/AuthLayout';
import RegisterForm from '@/components/pages/Auth/RegisterForm';

export default function Login() {
	return (
		<AuthLayout title="Register">
			<RegisterForm />
		</AuthLayout>
	);
}
