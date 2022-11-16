import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Components
import Home from '@/components/pages/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
