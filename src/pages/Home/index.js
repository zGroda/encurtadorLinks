import { FiLink } from 'react-icons/fi';
import { useState } from 'react';

import Menu from '../components/Menu';
import LinkItem from '../components/LinkItem';
import api from '../../services/api';

import './home.css';

export default function Home() {
	const [link, setLink] = useState('');
	const [data, setData] = useState({});
	const [showModal, setShowModal] = useState(false);

	async function handleShorLink() {
		try {
			const response = await api.post('/shorten', {
				long_url: link,
			});

			setData(response.data);
			setShowModal(true);
			setLink('');
		} catch {
			alert('Algo deu errado!');
			setLink('');
		}
	}

	return (
		<div className="containerHome">
			<div className="logo">
				<img src="/logo.png" alt="Link Logo" />
				<h1>Meus links</h1>
				<span>Cole o link para encurtar 👇</span>
			</div>

			<div className="areaInput">
				<div>
					<FiLink size={24} color="#fff" />
					<input
						placeholder="Cole seu link aqui..."
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
				</div>
				<button onClick={handleShorLink}>Encurtar Link</button>
			</div>

			<Menu />

			{showModal && (
				<LinkItem closeModal={() => setShowModal(false)} content={data} />
			)}
		</div>
	);
}
