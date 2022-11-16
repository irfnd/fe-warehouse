// Styles & Icons
import { IconButton, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import { Filter } from 'lucide-react';

export default function FilterStuff() {
	return (
		<Menu>
			<MenuButton as={IconButton} icon={<Filter />} size="lg" colorScheme="purple" rounded="xl" />
			<MenuList minWidth="240px">
				<MenuOptionGroup defaultValue="name" title="Sort By" type="radio">
					<MenuItemOption value="name">Name</MenuItemOption>
					<MenuItemOption value="purchase">Purchase Price</MenuItemOption>
					<MenuItemOption value="selling">Selling Price</MenuItemOption>
					<MenuItemOption value="stock">Stock</MenuItemOption>
				</MenuOptionGroup>
				<MenuDivider />
				<MenuOptionGroup defaultValue="asc" title="Order By" type="radio">
					<MenuItemOption value="asc">Ascending</MenuItemOption>
					<MenuItemOption value="desc">Descending</MenuItemOption>
				</MenuOptionGroup>
			</MenuList>
		</Menu>
	);
}
