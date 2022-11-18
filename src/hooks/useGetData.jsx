import { firestore } from '@/helpers/Firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function useGetData() {
	const [value, loading, error, snapshot] = useCollectionData(collection(firestore, 'stuff'));
	return { value, loading, error, snapshot };
}
