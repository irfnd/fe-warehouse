import { firestore } from '@/helpers/Firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Styles & Icons
import { SimpleGrid } from '@chakra-ui/react';

// Components
import CardStuff from '@/components/cards/CardStuff';

export default function ListStuff() {
	const [value, loading] = useCollectionData(collection(firestore, 'stuff'));

	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
			{!loading && value?.map((stuff, i) => <CardStuff key={i} data={stuff} />)}
		</SimpleGrid>
	);
}
