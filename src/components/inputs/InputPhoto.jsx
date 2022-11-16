// Styles & Icons
import { Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { Image } from 'lucide-react';

export default function InputPhoto(props) {
	const { name, label, placeholder } = props;

	return (
		<Flex direction="column" gap={2}>
			{label && <Text fontWeight="medium">{label}</Text>}
			<Flex
				direction="column"
				bg={useColorModeValue('white', 'gray.800')}
				align="center"
				py={16}
				w="full"
				borderColor="inherit"
				borderWidth={1}
				rounded="xl"
				shadow="md"
				_hover={{ borderColor: useColorModeValue('blackAlpha.300', 'whiteAlpha.400') }}
			>
				<Icon as={Image} color={useColorModeValue('gray.400', 'whiteAlpha.500')} fontSize={40} />
				{placeholder && (
					<Text fontSize={18} color={useColorModeValue('gray.400', 'whiteAlpha.500')}>
						{placeholder}
					</Text>
				)}
				<Text fontSize={14} color={useColorModeValue('gray.400', 'whiteAlpha.500')}>
					*only .jpg, .png and max 100KB
				</Text>
			</Flex>
		</Flex>
	);
}
