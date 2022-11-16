// Styles & Icons
import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

export default function ToggleTheme({ disclosure }) {
	const { colorMode, toggleColorMode } = useColorMode();

	const onClick = () => {
		toggleColorMode();
		if (disclosure) disclosure.onClose();
	};

	return <IconButton icon={colorMode === 'light' ? <Moon /> : <Sun />} colorScheme="purple" size="lg" rounded="full" onClick={onClick} />;
}
