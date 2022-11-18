import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Components
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Auth/Login';
import Register from '@/components/pages/Auth/Register';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
