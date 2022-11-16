// Styles & Icons
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

// Components
import ModalForm from '@/components/pages/Home/ModalForm';

export default function ModalStuff({ disclosure }) {
	const { isOpen, onClose } = disclosure;

	return (
		<Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add New Stuff</ModalHeader>
				<ModalCloseButton />
				<ModalBody px={10}>
					<ModalForm />
				</ModalBody>

				<ModalFooter display="flex" gap={2}>
					<Button colorScheme="purple" onClick={onClose}>
						Save
					</Button>
					<Button variant={useColorModeValue('solid', 'ghost')} colorScheme="red">
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
