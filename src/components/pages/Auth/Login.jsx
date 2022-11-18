// Components
import AuthLayout from '@/components/layouts/AuthLayout';
import LoginForm from '@/components/pages/Auth/LoginForm';

export default function Login() {
	return (
		<AuthLayout title="Login">
			<LoginForm />
		</AuthLayout>
	);
}
