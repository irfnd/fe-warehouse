// Styles & Icons
import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { PackageOpen } from 'lucide-react';

export default function BrandLogo() {
	return (
		<Flex align="center" gap={2} cursor="pointer">
			<Icon as={PackageOpen} fontSize={{ base: 40, sm: '6xl' }} color="purple.500" />
			<Flex display={{ base: 'none', sm: 'flex' }} direction="column">
				<Heading as="h1" fontSize="3xl" fontWeight="bold">
					Warehouse
				</Heading>
				<Text fontStyle="italic">Manage all stuff</Text>
			</Flex>
		</Flex>
	);
}
