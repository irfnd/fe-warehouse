import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StuffSchema } from '@/helpers/Validations';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { storage, firestore } from '@/helpers/Firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
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

export default function ModalUpdateStuff({ disclosure, item }) {
	const { isOpen, onClose } = disclosure;
	const [Loading, setLoading] = useState(false);
	const toast = useToast();
	const [uploadFile] = useUploadFile();
	const { value } = useGetData();

	const formOptions = { resolver: yupResolver(StuffSchema) };
	const methods = useForm({
		...formOptions,
		defaultValues: { photo: item.photo, name: item.name, purchase: item.purchase, selling: item.selling, stock: item.stock },
	});

	const onSubmit = async (data) => {
		let photo;
		let photoPath;
		try {
			setLoading(true);
			const checkStuff = value.filter((el) => el.name.toLowerCase() === data.name.toLowerCase());
			if (checkStuff.length > 0) throw new Error('Name already used, choose different Name!');
			if (data.photo) {
				const fileRef = ref(storage, data.photo[0].path);
				const uploadedFile = await uploadFile(fileRef, data.photo[0], { contentType: data.photo[0].type });
				photo = await getDownloadURL(fileRef);
				photoPath = uploadedFile.metadata.fullPath;
			}
			const docRef = doc(firestore, 'stuff', item.id);
			await updateDoc(docRef, { ...data, photo, photoPath });
			setLoading(false);
			methods.reset();
			onClose();
		} catch (err) {
			setLoading(false);
			toast({
				title: 'Unable to update stuff',
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
					<ModalHeader>Update Stuff</ModalHeader>
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
