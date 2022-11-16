// Styles & Icons
import { Button } from '@chakra-ui/react';
import { Plus } from 'lucide-react';

export default function AddButton() {
	return (
		<Button
			colorScheme="purple"
			size="lg"
			w={{ base: 'full', md: 'fit-content' }}
			leftIcon={<Plus />}
			rounded="xl"
			shadow="lg"
		>
			Add New Stuff
		</Button>
	);
}
