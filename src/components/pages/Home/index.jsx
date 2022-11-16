// Components
import BaseLayout from '@/components/layouts/BaseLayout';
import SearchBar from '@/components/pages/Home/SearchBar';
import AddButton from '@/components/pages/Home/AddButton';
import ListStuff from '@/components/pages/Home/ListStuff';

export default function Home() {
	return (
		<BaseLayout>
			<SearchBar />
			<AddButton />
			<ListStuff />
		</BaseLayout>
	);
}
