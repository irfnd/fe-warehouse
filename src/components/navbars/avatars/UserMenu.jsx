import { auth } from '@/helpers/Firebase';
import useAuthState from '@/hooks/useAuthState';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

// Styles & Icons
import { Avatar, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { ClipboardSignature, LogIn, LogOut, User } from 'lucide-react';

// Components
import ToggleTheme from '@/components/navbars/ToggleTheme';

export default function UserMenu() {
	const [signOut] = useSignOut(auth);
	const { user } = useAuthState();
	const navigate = useNavigate();

	return (
		<Flex align="center" gap={2}>
			<Menu>
				{user ? (
					<MenuButton>
						<Flex align="center" gap={4}>
							<Flex direction="column" justify="end" align="end">
								<Text fontSize={18} fontWeight="bold">
									Welcome
								</Text>
								<Text fontSize={14}>{user.displayName}</Text>
							</Flex>
							<Avatar name={user.displayName} src={user.photoURL} />
						</Flex>
					</MenuButton>
				) : (
					<MenuButton as={IconButton} icon={<User size={28} />} colorScheme="purple" size="lg" rounded="full" />
				)}
				<MenuList mt={2}>
					{user ? (
						<MenuItem icon={<LogOut size={18} />} onClick={() => signOut()}>
							logout
						</MenuItem>
					) : (
						<>
							<MenuItem icon={<ClipboardSignature size={18} />} onClick={() => navigate('/register')}>
								Register
							</MenuItem>
							<MenuItem icon={<LogIn size={18} />} onClick={() => navigate('/login')}>
								Login
							</MenuItem>
						</>
					)}
				</MenuList>
			</Menu>
			<ToggleTheme />
		</Flex>
	);
}
