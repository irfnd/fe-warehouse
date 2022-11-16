import { useFormContext } from 'react-hook-form';

// Styles & Icons
import { Input, FormControl, FormLabel, FormErrorMessage, useColorModeValue } from '@chakra-ui/react';

export default function InputNumber(props) {
	const { name, label, placeholder } = props;

	const { register, formState } = useFormContext();
	const { errors } = formState;

	return (
		<FormControl isInvalid={errors[name]}>
			{label && <FormLabel>{label}</FormLabel>}
			<Input
				type="number"
				size="lg"
				bg={useColorModeValue('white', 'gray.800')}
				rounded="xl"
				shadow="md"
				focusBorderColor="purple.500"
				placeholder={placeholder}
				{...register(name)}
			/>
			{errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
		</FormControl>
	);
}
