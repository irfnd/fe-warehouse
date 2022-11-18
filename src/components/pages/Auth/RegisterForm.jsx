import { RegisterSchema } from '@/helpers/Validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Styles & Icons
import { Button, Divider, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

// Components
import Input from '@/components/inputs/Input';
import AuthGoogleBtn from '@/components/pages/Auth/AuthGoogleBtn';

export default function RegisterForm() {
	const navigate = useNavigate();

	const formOptions = { resolver: yupResolver(RegisterSchema) };
	const methods = useForm({ ...formOptions });

	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} style={{ width: '100%' }}>
				<Flex justify="center">
					<Flex direction="column" justify="center" align="center" w={{ base: 'full', md: '90%', lg: '80%' }} gap={4}>
						<Input name="name" label="Name" placeholder="John Doe" />
						<Input name="email" type="email" label="Email" placeholder="johndoe@mail.com" />
						<Input name="password" type="password" label="Password" placeholder="Password" />
						<Input name="confirm" type="password" label="Confirm Password" placeholder="Retype password" />
						<Button type="submit" colorScheme="purple" size="lg" w="full" mt={2} rounded="xl">
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
