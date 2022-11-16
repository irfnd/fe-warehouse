import { useTitle } from 'react-use';

// Components
import BaseLayout from '@/components/layouts/BaseLayout';
import SearchStuff from '@/components/pages/Home/SearchStuff';
import AddButton from '@/components/pages/Home/AddButton';
import ListStuff from '@/components/pages/Home/ListStuff';

export default function Home() {
	useTitle('Warehouse - Homepage');

	return (
		<BaseLayout>
			<SearchStuff />
			<AddButton />
			<ListStuff />
		</BaseLayout>
	);
}
