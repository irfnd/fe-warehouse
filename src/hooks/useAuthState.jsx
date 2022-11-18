import { auth } from '@/helpers/Firebase';
import { useIdToken } from 'react-firebase-hooks/auth';

export default function useAuthState() {
	const [user, loading, error] = useIdToken(auth);
	return { user, loading, error };
}
