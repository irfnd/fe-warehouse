// Components
import InputText from '@/components/inputs/InputText';
import InputEmail from '@/components/inputs/InputEmail';
import InputNumber from '@/components/inputs/InputNumber';
import InputPassword from '@/components/inputs/InputPassword';
import InputPhoto from '@/components/inputs/InputPhoto';

export default function Input(props) {
	const { name, type, label, placeholder } = props;

	switch (type) {
		case 'email':
			return <InputEmail {...{ name, label, placeholder }} />;
		case 'number':
			return <InputNumber {...{ name, label, placeholder }} />;
		case 'password':
			return <InputPassword {...{ name, label, placeholder }} />;
		case 'photo':
			return <InputPhoto {...{ name, label, placeholder }} />;
		default:
			return <InputText {...{ name, label, placeholder }} />;
	}
}
