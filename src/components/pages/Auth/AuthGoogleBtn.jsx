import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/helpers/Firebase';
import { Navigate } from 'react-router-dom';

// Styles & Icons
import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export default function AuthGoogleBtn() {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);
	const [Loading, setLoading] = useState(false);

	const onLogin = () => {
		setLoading(true);
		signInWithGoogle();
	};

	return (
		<>
			{user && <Navigate to="/" />}
			<Button isLoading={Loading} leftIcon={<FcGoogle />} type="button" size="lg" w="full" rounded="xl" onClick={onLogin}>
				Google
			</Button>
		</>
	);
}
