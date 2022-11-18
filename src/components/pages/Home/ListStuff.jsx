import useGetData from '@/hooks/useGetData';
import { useSelector } from 'react-redux';

// Styles & Icons
import { SimpleGrid } from '@chakra-ui/react';

// Components
import CardStuff from '@/components/cards/CardStuff';

export default function ListStuff() {
	const { search } = useSelector((state) => state.search);
	const { value, loading, error, snapshot } = useGetData();
	const filtered = !loading && !search ? value : value?.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

	return (
		!loading && (
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
				{filtered?.map((item, i) => (
					<CardStuff key={i} data={item} id={snapshot.docs[i].id} />
				))}
			</SimpleGrid>
		)
	);
}
