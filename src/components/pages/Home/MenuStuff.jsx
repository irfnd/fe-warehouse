// Styles & Icons
import { Menu, IconButton, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MoreHorizontal, Trash, Edit } from 'lucide-react';

export default function MenuStuff({ disclosure }) {
	const { disclosureDelete, disclosureUpdate } = disclosure;

	return (
		<Menu size="sm">
			<MenuButton
				colorScheme="purple"
				position="absolute"
				as={IconButton}
				right={0}
				mt={2}
				mr={2}
				icon={<MoreHorizontal />}
				rounded="full"
			/>
			<MenuList>
				<MenuItem icon={<Edit size={18} />} onClick={() => disclosureUpdate.onOpen()}>
					Update
				</MenuItem>
				<MenuItem icon={<Trash size={18} />} onClick={() => disclosureDelete.onOpen()}>
					Delete
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
