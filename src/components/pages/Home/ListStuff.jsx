import { firestore } from '@/helpers/Firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';

// Styles & Icons
import { SimpleGrid } from '@chakra-ui/react';

// Components
import CardStuff from '@/components/cards/CardStuff';

export default function ListStuff() {
	const { search } = useSelector((state) => state.stuff);
	const [value, loading] = useCollectionData(collection(firestore, 'stuff'));
	const filtered = !loading && !search ? value : value?.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
			{!loading && filtered?.map((item, i) => <CardStuff key={i} data={item} />)}
		</SimpleGrid>
	);
}
