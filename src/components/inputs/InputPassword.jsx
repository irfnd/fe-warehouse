import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

// Styles & Icons
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	useColorModeValue,
} from '@chakra-ui/react';
import { Eye, EyeOff } from 'lucide-react';

export default function InputPassword(props) {
	const { name, label, placeholder } = props;
	const [ShowPass, setShowPass] = useState(false);

	const { register, formState } = useFormContext();
	const { errors } = formState;

	return (
		<FormControl isInvalid={errors[name]}>
			{label && <FormLabel>{label}</FormLabel>}
			<InputGroup size="lg">
				<Input
					type={ShowPass ? 'text' : 'password'}
					bg={useColorModeValue('white', 'gray.800')}
					rounded="xl"
					shadow="md"
					focusBorderColor="purple.500"
					placeholder={placeholder}
					{...register(name)}
				/>
				<InputRightElement h="full">
					<IconButton
						size="sm"
						icon={ShowPass ? <EyeOff size={18} /> : <Eye size={18} />}
						rounded="xl"
						onClick={() => setShowPass(!ShowPass)}
					/>
				</InputRightElement>
			</InputGroup>
			{errors[name] && <FormErrorMessage>*{errors[name].message}</FormErrorMessage>}
		</FormControl>
	);
}
