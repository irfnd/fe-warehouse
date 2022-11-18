import { useTitle } from 'react-use';

// Styles & Icons
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Components
import BrandLogoAuth from '@/components/pages/Auth/BrandLogoAuth';

export default function AuthLayout({ children, title }) {
	useTitle(`Warehouse - ${title}`);

	return (
		<Flex w="full" justify="center" align="center" minH="100vh" bgGradient="linear(to-br, purple.500, purple.800)" py={6}>
			<Flex
				direction="column"
				justify="center"
				align="center"
				w={{ base: 'full', sm: '75%', md: '55%', lg: '45%', xl: '35%' }}
				h="full"
				px={10}
				py={16}
				mx={6}
				shadow="lg"
				rounded="xl"
				gap={10}
				bg={useColorModeValue('white', 'gray.900')}
			>
				<BrandLogoAuth />
				{children}
			</Flex>
		</Flex>
	);
}
