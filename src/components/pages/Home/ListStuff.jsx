// Styles & Icons
import { Flex, SimpleGrid } from '@chakra-ui/react';

// Components
import CardStuff from '@/components/cards/CardStuff';

export default function ListStuff() {
	return (
		<Flex>
			<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
				{[...Array(12)].map((_, i) => (
					<CardStuff key={i} />
				))}
			</SimpleGrid>
		</Flex>
	);
}
