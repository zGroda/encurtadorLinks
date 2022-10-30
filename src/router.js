import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeusLinks from './pages/MeusLinks';
import Error from './pages/Error';

export default function RoutesApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/links" element={<MeusLinks />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}
