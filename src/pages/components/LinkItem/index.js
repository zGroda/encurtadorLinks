import './linkItem.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({ closeModal, content }) {
	async function copyLink() {
		await navigator.clipboard.writeText(content.link);
		alert('URL copiada com sucesso!');
	}

	return (
		<div className="containerModal">
			<div className="headerModal">
				<h2>Link encurtado</h2>
				<button onClick={closeModal}>
					<FiX size={28} color="#000" />
				</button>
			</div>

			<span>{content.long_url}</span>

			<button className="linkModal" onClick={copyLink}>
				{content.link}
				<FiClipboard size={20} color="#fff" />
			</button>
		</div>
	);
}
