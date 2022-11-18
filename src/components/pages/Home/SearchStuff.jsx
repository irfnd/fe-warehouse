import { SearchActions } from '@/redux/slices/Search';
import { useDispatch, useSelector } from 'react-redux';

// Styles & Icons
import { Flex, Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { Search } from 'lucide-react';

export default function SearchStuff() {
	const { search } = useSelector((state) => state.search);
	const dispatch = useDispatch();

	return (
		<Flex gap={4}>
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
					value={search}
					onChange={(e) => dispatch(SearchActions.setSearch(e.target.value))}
				/>
			</InputGroup>
		</Flex>
	);
}
