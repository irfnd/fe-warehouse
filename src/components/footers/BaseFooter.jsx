// Styles & Icons
import { Flex, Text } from '@chakra-ui/react';

export default function BaseFooter() {
	return (
		<Flex justify="center" mt={14}>
			<Text textAlign="center">Copyright © Warehouse {new Date().getFullYear()}. All Rights Reserved.</Text>
		</Flex>
	);
}
