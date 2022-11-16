// Styles & Icons
import { Input, FormControl, FormLabel, FormErrorMessage, useColorModeValue } from '@chakra-ui/react';

export default function InputText(props) {
	const { name, label, placeholder } = props;

	return (
		<FormControl>
			{label && <FormLabel>{label}</FormLabel>}
			<Input
				type="text"
				size="lg"
				bg={useColorModeValue('white', 'gray.800')}
				rounded="xl"
				shadow="md"
				focusBorderColor="purple.500"
				placeholder={placeholder}
			/>
		</FormControl>
	);
}
