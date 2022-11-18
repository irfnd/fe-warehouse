import { Navigate } from 'react-router-dom';
import useAuthState from '@/hooks/useAuthState';

// Components
import BaseLayout from '@/components/layouts/BaseLayout';
import AddButton from '@/components/pages/Home/AddButton';
import ListStuff from '@/components/pages/Home/ListStuff';
import SearchStuff from '@/components/pages/Home/SearchStuff';
import Loading from '@/components/pages/Loading';

export default function Home() {
	const { user, loading } = useAuthState();

	if (loading) return <Loading />;

	if (user) {
		return (
			<BaseLayout title="Homepage">
				<SearchStuff />
				<AddButton />
				<ListStuff />
			</BaseLayout>
		);
	}

	return <Navigate to="/login" />;
}
