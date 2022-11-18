import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StuffSchema } from '@/helpers/Validations';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { storage, firestore } from '@/helpers/Firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

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
	const [uploadFile] = useUploadFile();
	const db = collection(firestore, 'stuff');

	const formOptions = { resolver: yupResolver(StuffSchema) };
	const methods = useForm({ ...formOptions });

	const onSubmit = async (data) => {
		const fileRef = ref(storage, data.photo[0].path);
		await uploadFile(fileRef, data.photo[0], { contentType: data.photo[0].type });
		const getFileUrl = await getDownloadURL(fileRef);
		await addDoc(db, { ...data, photo: getFileUrl });
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
