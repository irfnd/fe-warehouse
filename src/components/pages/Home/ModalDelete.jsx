import { useState } from 'react';
import { ref, deleteObject } from 'firebase/storage';
import { doc, deleteDoc } from 'firebase/firestore';
import { firestore, storage } from '@/helpers/Firebase';

// Styles & Icons
import {
	Button,
	Flex,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Tooltip,
	useColorModeValue,
} from '@chakra-ui/react';
import { PackageMinus, PackagePlus, PackageSearch } from 'lucide-react';

export default function ModalDelete({ item, disclosure }) {
	const { isOpen, onClose } = disclosure;
	const [Loading, setLoading] = useState(false);

	const onDelete = async () => {
		try {
			setLoading(true);
			const fileRef = ref(storage, item.photoPath);
			const docRef = doc(firestore, 'stuff', item.id);
			await deleteDoc(docRef);
			await deleteObject(fileRef);
			setLoading(false);
			onClose();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Delete Stuff</ModalHeader>
				<ModalCloseButton />
				<ModalBody display="flex" flexDirection="column" gap={4}>
					<Text fontSize="lg">Are your sure to delete this stuff?</Text>
					<Flex direction="column" gap={4} h="full">
						<Flex>
							<Tooltip bg="purple.500" color="white" label={item.name} placement="right" hasArrow rounded="lg">
								<Text fontSize={24} fontWeight="semibold" noOfLines={1}>
									{item.name}
								</Text>
							</Tooltip>
						</Flex>
						<Flex direction="column" gap={2}>
							<Flex align="center" gap={2}>
								<Icon as={PackageMinus} fontSize={22} color="purple.500" />
								<Tooltip bg="purple.500" color="white" label="Purchase Price" placement="right" hasArrow rounded="lg">
									<Text fontSize={16} noOfLines={1} cursor="pointer">
										{item.purchase} IDR
									</Text>
								</Tooltip>
							</Flex>
							<Flex align="center" gap={2}>
								<Icon as={PackagePlus} fontSize={22} color="purple.500" />
								<Tooltip bg="purple.500" color="white" label="Selling Price" placement="right" hasArrow rounded="lg">
									<Text fontSize={16} noOfLines={1} cursor="pointer">
										{item.selling} IDR
									</Text>
								</Tooltip>
							</Flex>
							<Flex align="center" gap={2}>
								<Icon as={PackageSearch} fontSize={22} color="purple.500" />
								<Tooltip bg="purple.500" color="white" label="Stock" placement="right" hasArrow rounded="lg">
									<Text fontSize={16} noOfLines={1} cursor="pointer">
										{item.stock} Pieces
									</Text>
								</Tooltip>
							</Flex>
						</Flex>
					</Flex>
				</ModalBody>

				<ModalFooter display="flex" gap={2}>
					<Button isLoading={Loading} colorScheme="purple" onClick={onDelete}>
						Delete
					</Button>
					<Button variant={useColorModeValue('solid', 'ghost')} colorScheme="red" onClick={onClose}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
