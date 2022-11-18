import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import dropzoneOptions from '@/helpers/Dropzone';

// Styles & Icons
import { Flex, Text, Icon, IconButton, Image, useColorModeValue } from '@chakra-ui/react';
import { Image as ImageIcon, X } from 'lucide-react';

export default function InputPhoto(props) {
	const { name, label, placeholder } = props;
	const [SelectedFile, setSelectedFile] = useState(null);
	const [Errors, setErrors] = useState(null);

	const { register, formState, setValue, getValues } = useFormContext();
	const { formName } = register(name);
	const { errors } = formState;

	useState(() => {
		setSelectedFile(getValues('photo'));
	}, []);

	const onDrop = (accepted, rejected) => {
		if (rejected.length > 0) {
			const customError = rejected[0].errors.map(({ code }) => {
				const error = {};
				if (code) {
					if (code === 'file-invalid-type') error.message = 'Photo must be .jpg or .png';
					if (code === 'file-too-large') error.message = 'Photo must be less than 100KB';
					return error;
				}
				return null;
			});
			setErrors(customError);
		} else {
			if (SelectedFile?.preview) URL.revokeObjectURL(SelectedFile.preview);
			setSelectedFile({ ...accepted[0], preview: URL.createObjectURL(accepted[0]) });
			setValue(name, accepted);
			setErrors(null);
		}
	};

	const onClear = () => {
		if (SelectedFile?.preview) URL.revokeObjectURL(SelectedFile.preview);
		setSelectedFile(null);
		setValue(name, null);
		setErrors(null);
	};

	const { getRootProps, getInputProps } = useDropzone(dropzoneOptions(onDrop));

	return (
		<Flex position="relative" direction="column" gap={2}>
			{label && <Text fontWeight="medium">{label}</Text>}
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				justify="center"
				align="center"
				h="300px"
				borderColor={Errors || errors[name] ? useColorModeValue('red.500', 'red.300') : 'inherit'}
				borderWidth={Errors || errors[name] ? 2 : 1}
				rounded="xl"
				shadow="md"
				_hover={{
					borderColor:
						Errors || errors[name] ? useColorModeValue('red.500', 'red.300') : useColorModeValue('blackAlpha.300', 'whiteAlpha.400'),
				}}
				cursor="pointer"
				{...getRootProps()}
			>
				<input type="hidden" name={formName} aria-label={formName} {...getInputProps()} />
				{SelectedFile && (
					<Image src={SelectedFile?.preview || SelectedFile} alt="Stuff Photo" boxSize="full" objectFit="contain" rounded="xl" />
				)}
				{!SelectedFile && (
					<Flex direction="column" align="center" jusfity="center">
						<Icon as={ImageIcon} color={useColorModeValue('gray.400', 'whiteAlpha.500')} fontSize={40} />
						{placeholder && (
							<Text fontSize={18} color={useColorModeValue('gray.400', 'whiteAlpha.500')}>
								{placeholder}
							</Text>
						)}
						<Text fontSize={12} color={useColorModeValue('gray.400', 'whiteAlpha.500')}>
							*only .jpg, .png and max 100KB
						</Text>
					</Flex>
				)}
			</Flex>
			{errors[name] && (
				<Text fontSize={14} color={useColorModeValue('red.500', 'red.300')}>
					*{errors[name].message}
				</Text>
			)}
			{Errors &&
				Errors.map((el, i) => (
					<Text key={i} fontSize={14} color={useColorModeValue('red.500', 'red.300')}>
						*{el.message}
					</Text>
				))}
			{SelectedFile && (
				<IconButton icon={<X />} position="absolute" colorScheme="red" top={0} right={0} rounded="full" mt={2} mr={2} onClick={onClear} />
			)}
		</Flex>
	);
}
