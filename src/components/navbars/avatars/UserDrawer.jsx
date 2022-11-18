import { auth } from '@/helpers/Firebase';
import useAuthState from '@/hooks/useAuthState';
import { useSignOut } from 'react-firebase-hooks/auth';
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
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { ClipboardSignature, LogIn, LogOut, Menu as MenuIcon, User } from 'lucide-react';

// Components
import ToggleTheme from '@/components/navbars/ToggleTheme';

export default function UserDrawer() {
	const [signOut] = useSignOut(auth);
	const { user } = useAuthState();
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
							{user ? (
								<>
									<Avatar size="xl" name={user.displayName} src={user.photoURL} />
									<Flex direction="column" align="center">
										<Text fontSize={20} fontWeight="bold">
											Welcome
										</Text>
										<Text fontSize={18}>{user.displayName}</Text>
									</Flex>
									<Button w={150} leftIcon={<LogOut size={18} />} colorScheme="red" onClick={() => signOut()} mt={6}>
										Logout
									</Button>
								</>
							) : (
								<>
									<Avatar
										bg={useColorModeValue('purple.500', 'purple.200')}
										color={useColorModeValue('white', 'gray.800')}
										size="xl"
										icon={<User size={70} />}
									/>
									<Flex direction="column" w={150} gap={2} mt={6}>
										<Button leftIcon={<ClipboardSignature size={18} />} colorScheme="purple" onClick={() => navigate('/register')}>
											Register
										</Button>
										<Button leftIcon={<LogIn size={18} />} colorScheme="purple" onClick={() => navigate('/login')}>
											Login
										</Button>
									</Flex>
								</>
							)}
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
