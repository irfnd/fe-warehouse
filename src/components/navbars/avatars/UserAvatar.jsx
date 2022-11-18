// Styles & Icons
import { useBreakpointValue } from '@chakra-ui/react';

// Components
import UserDrawer from '@/components/navbars/avatars/UserDrawer';
import UserMenu from '@/components/navbars/avatars/UserMenu';

export default function UserAvatar() {
	return useBreakpointValue({
		base: <UserDrawer />,
		md: <UserMenu />,
	});
}
