// Styles & Icons
import { Button, useDisclosure } from '@chakra-ui/react';
import { Plus } from 'lucide-react';

// Components
import ModalStuff from '@/components/pages/Home/ModalStuff';

export default function AddButton() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				colorScheme="purple"
				size="lg"
				w={{ base: 'full', md: 'fit-content' }}
				leftIcon={<Plus />}
				rounded="xl"
				shadow="lg"
				onClick={onOpen}
			>
				Add New Stuff
			</Button>
			<ModalStuff {...{ disclosure: { isOpen, onClose } }} />
		</>
	);
}
