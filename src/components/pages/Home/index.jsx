// Components
import BaseLayout from '@/components/layouts/BaseLayout';
import SearchStuff from '@/components/pages/Home/SearchStuff';
import AddButton from '@/components/pages/Home/AddButton';
import ListStuff from '@/components/pages/Home/ListStuff';

export default function Home() {
	return (
		<BaseLayout title="Homepage">
			<SearchStuff />
			<AddButton />
			<ListStuff />
		</BaseLayout>
	);
}
