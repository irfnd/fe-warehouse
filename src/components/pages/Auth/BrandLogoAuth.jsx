// Styles & Icons
import { Flex, Icon, Heading, Text } from '@chakra-ui/react';
import { PackageOpen } from 'lucide-react';

export default function BrandLogoAuth() {
	return (
		<Flex align="center" gap={2} cursor="pointer">
			<Icon as={PackageOpen} fontSize={{ base: '5xl', sm: '6xl' }} color="purple.500" />
			<Flex direction="column">
				<Heading as="h1" fontSize={{ base: '2xl', sm: '3xl' }} fontWeight="bold">
					Warehouse
				</Heading>
				<Text fontSize={14} fontStyle="italic">
					Manage all stuff
				</Text>
			</Flex>
		</Flex>
	);
}
