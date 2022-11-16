// Components
import InputText from '@/components/inputs/InputText';
import InputNumber from '@/components/inputs/InputNumber';
import InputPhoto from '@/components/inputs/InputPhoto';

export default function Input(props) {
	const { name, type, label, placeholder } = props;

	switch (type) {
		case 'number':
			return <InputNumber {...{ name, label, placeholder }} />;
		case 'photo':
			return <InputPhoto {...{ name, label, placeholder }} />;
		default:
			return <InputText {...{ name, label, placeholder }} />;
	}
}
