import { Navigate } from 'react-router-dom';
import useAuthState from '@/hooks/useAuthState';

// Components
import AuthLayout from '@/components/layouts/AuthLayout';
import RegisterForm from '@/components/pages/Auth/RegisterForm';
import Loading from '@/components/pages/Loading';

export default function Login() {
	const { user, loading } = useAuthState();

	if (loading) return <Loading />;
	if (user) return <Navigate to="/" />;
	return (
		<AuthLayout title="Register">
			<RegisterForm />
		</AuthLayout>
	);
}
