// Styles
import { Container, Flex, useColorModeValue } from '@chakra-ui/react';

// Components
import BaseNavbar from '@/components/navbars/BaseNavbar';

export default function BaseLayout({ children }) {
	return (
		<Flex bg={useColorModeValue('white', 'gray.900')} minH="100vh" pb={10}>
			<Container
				maxW={{
					base: 'sm',
					sm: 'container.sm',
					md: 'container.md',
					lg: 'container.lg',
					xl: 'container.xl',
				}}
			>
				<BaseNavbar />
				<Flex direction="column" gap={10}>
					{children}
				</Flex>
			</Container>
		</Flex>
	);
}
