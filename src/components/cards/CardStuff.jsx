// Styles & Icons
import { Flex, Icon, Image, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { PackageMinus, PackagePlus, PackageSearch } from 'lucide-react';

export default function CardStuff() {
	return (
		<Flex bg={useColorModeValue('white', 'gray.800')} direction="column" shadow="lg" rounded="xl" w="full">
			<Flex maxH="200px">
				<Image src="https://source.unsplash.com/random/1080x1080/?book" boxSize="full" roundedTop="xl" objectFit="cover" />
			</Flex>
			<Flex direction="column" p={6} gap={4} h="full">
				<Tooltip bg="purple.500" color="white" label="Book of Magic" placement="top-start" rounded="lg">
					<Text fontSize={24} fontWeight="semibold" noOfLines={1}>
						Book of Magic
					</Text>
				</Tooltip>
				<Flex direction="column" gap={2}>
					<Flex align="center" gap={2}>
						<Icon as={PackageMinus} fontSize={22} color="purple.500" />
						<Tooltip bg="purple.500" color="white" label="Purchase Price" placement="right" hasArrow rounded="lg">
							<Text fontSize={16} noOfLines={1} cursor="pointer">
								50.000 IDR
							</Text>
						</Tooltip>
					</Flex>
					<Flex align="center" gap={2}>
						<Icon as={PackagePlus} fontSize={22} color="purple.500" />
						<Tooltip bg="purple.500" color="white" label="Selling Price" placement="right" hasArrow rounded="lg">
							<Text fontSize={16} noOfLines={1} cursor="pointer">
								50.000 IDR
							</Text>
						</Tooltip>
					</Flex>
					<Flex align="center" gap={2}>
						<Icon as={PackageSearch} fontSize={22} color="purple.500" />
						<Tooltip bg="purple.500" color="white" label="Stock" placement="right" hasArrow rounded="lg">
							<Text fontSize={16} noOfLines={1} cursor="pointer">
								10 Pieces
							</Text>
						</Tooltip>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
