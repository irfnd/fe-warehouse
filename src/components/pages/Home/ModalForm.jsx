// Styles & Icons
import { Flex } from '@chakra-ui/react';

// Components
import Input from '@/components/inputs/Input';

export default function ModalForm() {
	return (
		<Flex direction="column" gap={4}>
			<Input name="photo" type="photo" placeholder="Input photo" />
			<Input name="name" label="Name" placeholder="Input name" />
			<Input name="purchase" type="number" label="Purchase Price" placeholder="Input purchase price" />
			<Input name="selling" type="number" label="Selling Price" placeholder="Input selling price" />
			<Input name="stock" type="number" label="Stock" placeholder="Input stock" />
		</Flex>
	);
}
