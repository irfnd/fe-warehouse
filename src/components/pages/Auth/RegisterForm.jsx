import { auth } from '@/helpers/Firebase';
import { RegisterSchema } from '@/helpers/Validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Styles & Icons
import { Button, Divider, Flex, Link, Text, useColorModeValue, useToast } from '@chakra-ui/react';

// Components
import Input from '@/components/inputs/Input';
import AuthGoogleBtn from '@/components/pages/Auth/AuthGoogleBtn';

export default function RegisterForm() {
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	const [Loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const toast = useToast();

	const formOptions = { resolver: yupResolver(RegisterSchema) };
	const methods = useForm({ ...formOptions });

	const onSubmit = (data) => {
		console.log(data);
		setLoading(true);
		createUserWithEmailAndPassword(data.email, data.password);
		if (error) {
			setLoading(false);
			toast({
				title: 'Unable to Register!',
				description: error.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top',
			});
		} else {
			setLoading(false);
			toast({
				title: 'Register Successfully',
				description: 'You will be redirected to homepage',
				status: 'success',
				duration: 5000,
				isClosable: true,
				position: 'top',
			});
			setTimeout(() => navigate('/'), 5000);
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} style={{ width: '100%' }}>
				<Flex justify="center">
					<Flex direction="column" justify="center" align="center" w={{ base: 'full', md: '90%', lg: '80%' }} gap={4}>
						<Input name="name" label="Name" placeholder="John Doe" />
						<Input name="email" type="email" label="Email" placeholder="johndoe@mail.com" />
						<Input name="password" type="password" label="Password" placeholder="Password" />
						<Input name="confirm" type="password" label="Confirm Password" placeholder="Retype password" />
						<Button isLoading={Loading} type="submit" colorScheme="purple" size="lg" w="full" mt={2} rounded="xl">
							Register
						</Button>
						<Flex position="relative" justify="center" align="center" w="full" my={3}>
							<Divider />
							<Text position="absolute" bg={useColorModeValue('white', 'gray.900')} px={2}>
								or continue with
							</Text>
						</Flex>
						<AuthGoogleBtn />
						<Flex direction="column" align="center" w="full">
							<Text>Already have an account?</Text>
							<Link color="purple.500" onClick={() => navigate('/login')}>
								Login Now
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</form>
		</FormProvider>
	);
}
