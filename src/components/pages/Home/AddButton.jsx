// Styles & Icons
import { Button, useDisclosure } from '@chakra-ui/react';
import { Plus } from 'lucide-react';

// Components
import ModalAddStuff from '@/components/pages/Home/ModalAddStuff';

export default function AddButton() {
	const disclosure = useDisclosure();

	return (
		<>
			<Button
				colorScheme="purple"
				size="lg"
				w={{ base: 'full', md: 'fit-content' }}
				leftIcon={<Plus />}
				rounded="xl"
				shadow="lg"
				onClick={disclosure.onOpen}
			>
				Add New Stuff
			</Button>
			<ModalAddStuff {...{ disclosure }} />
		</>
	);
}
