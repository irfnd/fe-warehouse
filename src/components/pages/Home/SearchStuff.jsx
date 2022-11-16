// Styles & Icons
import { Flex, Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { Search } from 'lucide-react';

// Components
import FilterStuff from '@/components/pages/Home/FilterStuff';

export default function SearchStuff() {
	return (
		<Flex gap={2}>
			<InputGroup size="lg">
				<InputLeftElement pointerEvents="none">
					<Search />
				</InputLeftElement>
				<Input
					bg={useColorModeValue('white', 'gray.800')}
					type="text"
					placeholder="Search Stuff"
					rounded="xl"
					shadow="md"
					focusBorderColor="purple.500"
				/>
			</InputGroup>
			<FilterStuff />
		</Flex>
	);
}
