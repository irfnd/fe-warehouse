import { useNavigate } from 'react-router-dom';

// Styles & Icons
import {
	Avatar,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import { LogOut, Menu as MenuIcon } from 'lucide-react';

// Components
import ToggleTheme from '@/components/navbars/ToggleTheme';

export default function UserAvatar() {
	return useBreakpointValue({ base: <UserDrawer />, md: <UserMenu /> });
}

function UserMenu() {
	const navigate = useNavigate();

	return (
		<Flex align="center" gap={2}>
			<Menu>
				<MenuButton>
					<Flex align="center" gap={4}>
						<Flex direction="column" justify="end" align="end">
							<Text fontSize={18} fontWeight="bold">
								Welcome
							</Text>
							<Text fontSize={14}>Administrator</Text>
						</Flex>
						<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
					</Flex>
				</MenuButton>
				<MenuList mt={2}>
					<MenuItem icon={<LogOut size={18} />} onClick={() => navigate('/login')}>
						logout
					</MenuItem>
				</MenuList>
			</Menu>
			<ToggleTheme />
		</Flex>
	);
}

function UserDrawer() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	return (
		<Flex>
			<IconButton variant="ghost" colorScheme="purple" size="lg" icon={<MenuIcon size={32} />} rounded="xl" onClick={onOpen} />
			<Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size="lg" />
					<DrawerBody>
						<Flex direction="column" align="center" gap={4} mt={16}>
							<Avatar size="xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
							<Flex direction="column" align="center">
								<Text fontSize={20} fontWeight="bold">
									Welcome
								</Text>
								<Text fontSize={18}>Administrator</Text>
							</Flex>
							<Button leftIcon={<LogOut size={18} />} colorScheme="red" onClick={() => navigate('/login')}>
								Logout
							</Button>
						</Flex>
					</DrawerBody>
					<DrawerFooter display="flex" justifyContent="start">
						<ToggleTheme {...{ disclosure: { onClose } }} />
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}
