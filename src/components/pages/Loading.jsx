// Styles & Icons
import { Flex, Spinner, Icon } from '@chakra-ui/react';
import { PackageOpen } from 'lucide-react';

export default function Loading() {
	return (
		<Flex justify="center" align="center" minH="100vh">
			<Flex position="relative" justify="center" align="center">
				<Icon as={PackageOpen} fontSize="7xl" color="purple.500" />
				<Spinner position="absolute" boxSize={140} color="purple.500" thickness="7px" speed="0.8s" />
			</Flex>
		</Flex>
	);
}
