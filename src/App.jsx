import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page Components
import Login from '@/components/pages/Auth/Login';
import Home from '@/components/pages/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					{/* <Route path="register" element={<Register />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
