// Styles & Icons
import { Flex } from '@chakra-ui/react';

// Components
import BrandLogo from '@/components/navbars/BrandLogo';
import UserAvatar from '@/components/navbars/UserAvatar';

export default function BaseNavbar() {
	return (
		<Flex justify="space-between" align="center" py={10}>
			<BrandLogo />
			<UserAvatar />
		</Flex>
	);
}
