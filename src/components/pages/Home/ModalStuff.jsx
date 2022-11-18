import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StuffSchema } from '@/helpers/Validations';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { storage, firestore } from '@/helpers/Firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import useGetData from '@/hooks/useGetData';
import { useState } from 'react';

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
	useToast,
} from '@chakra-ui/react';

// Components
import ModalForm from '@/components/pages/Home/ModalForm';

export default function ModalStuff({ disclosure }) {
	const { isOpen, onClose } = disclosure;
	const [Loading, setLoading] = useState(false);
	const toast = useToast();
	const [uploadFile] = useUploadFile();
	const { value } = useGetData();
	const db = collection(firestore, 'stuff');

	const formOptions = { resolver: yupResolver(StuffSchema) };
	const methods = useForm({ ...formOptions });

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			const checkStuff = value.filter((el) => el.name.toLowerCase() === data.name.toLowerCase());
			if (checkStuff.length > 0) throw new Error('Name already used, choose different Name!');
			const fileRef = ref(storage, data.photo[0].path);
			const uploadedFile = await uploadFile(fileRef, data.photo[0], { contentType: data.photo[0].type });
			const getFileUrl = await getDownloadURL(fileRef);
			await addDoc(db, { ...data, photo: getFileUrl, photoPath: uploadedFile.metadata.fullPath });
			setLoading(false);
			methods.reset();
			onClose();
		} catch (err) {
			setLoading(false);
			toast({
				title: 'Unable to create stuff',
				description: err.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top',
			});
		}
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
						<Button isLoading={Loading} type="submit" form="stuff-form" colorScheme="purple">
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
