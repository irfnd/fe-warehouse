// Styles & Icons
import { Flex, SimpleGrid } from '@chakra-ui/react';

// Components
import CardStuff from '@/components/cards/CardStuff';

export default function ListStuff() {
	return (
		<Flex>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
				{[...Array(12)].map((_, i) => (
					<CardStuff key={i} />
				))}
			</SimpleGrid>
		</Flex>
	);
}
