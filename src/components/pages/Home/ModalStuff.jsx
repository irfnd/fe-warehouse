import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StuffSchema } from '@/helpers/Validations';

// Styles & Icons
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useColorModeValue,
} from '@chakra-ui/react';

// Components
import ModalForm from '@/components/pages/Home/ModalForm';

export default function ModalStuff({ disclosure }) {
	const { isOpen, onClose } = disclosure;

	const formOptions = { resolver: yupResolver(StuffSchema) };
	const methods = useForm({ ...formOptions });

	const onSubmit = (data) => {
		console.log(data);
		methods.reset();
		onClose();
	};

	const onCancel = () => {
		methods.reset();
		onClose();
	};

	return (
		<FormProvider {...methods}>
			<Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add New Stuff</ModalHeader>
					<ModalCloseButton />
					<ModalBody px={10}>
						<form id="stuff-form" onSubmit={methods.handleSubmit(onSubmit)}>
							<ModalForm />
						</form>
					</ModalBody>

					<ModalFooter display="flex" gap={2}>
						<Button type="submit" form="stuff-form" colorScheme="purple">
							Save
						</Button>
						<Button variant={useColorModeValue('solid', 'ghost')} colorScheme="red" onClick={onCancel}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</FormProvider>
	);
}
