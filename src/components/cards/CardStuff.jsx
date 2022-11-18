// Styles & Icons
import { Flex, Icon, Image, Text, Tooltip, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { PackageMinus, PackagePlus, PackageSearch } from 'lucide-react';

// Components
import MenuStuff from '@/components/pages/Home/MenuStuff';
import ModalDelete from '@/components/pages/Home/ModalDelete';

export default function CardStuff({ data, id }) {
	const disclosureDelete = useDisclosure();
	const disclosureUpdate = useDisclosure();

	return (
		<>
			<Flex bg={useColorModeValue('white', 'gray.800')} direction="column" shadow="lg" rounded="xl" h="fit-content">
				<Flex position="relative" h="200px">
					<Image src={data?.photo} boxSize="full" roundedTop="xl" fit="cover" />
					<MenuStuff {...{ disclosure: { disclosureDelete, disclosureUpdate } }} />
				</Flex>
				<Flex direction="column" p={6} gap={4} h="full">
					<Tooltip bg="purple.500" color="white" label={data?.name} placement="top-start" rounded="lg">
						<Text fontSize={24} fontWeight="semibold" noOfLines={1}>
							{data?.name}
						</Text>
					</Tooltip>
					<Flex direction="column" gap={2}>
						<Flex align="center" gap={2}>
							<Icon as={PackageMinus} fontSize={22} color="purple.500" />
							<Tooltip bg="purple.500" color="white" label="Purchase Price" placement="right" hasArrow rounded="lg">
								<Text fontSize={16} noOfLines={1} cursor="pointer">
									{data?.purchase} IDR
								</Text>
							</Tooltip>
						</Flex>
						<Flex align="center" gap={2}>
							<Icon as={PackagePlus} fontSize={22} color="purple.500" />
							<Tooltip bg="purple.500" color="white" label="Selling Price" placement="right" hasArrow rounded="lg">
								<Text fontSize={16} noOfLines={1} cursor="pointer">
									{data?.selling} IDR
								</Text>
							</Tooltip>
						</Flex>
						<Flex align="center" gap={2}>
							<Icon as={PackageSearch} fontSize={22} color="purple.500" />
							<Tooltip bg="purple.500" color="white" label="Stock" placement="right" hasArrow rounded="lg">
								<Text fontSize={16} noOfLines={1} cursor="pointer">
									{data?.stock} Pieces
								</Text>
							</Tooltip>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<ModalDelete {...{ disclosure: disclosureDelete, item: { ...data, id } }} />
		</>
	);
}
