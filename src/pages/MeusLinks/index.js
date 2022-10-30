import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getLinksSaved, deleteLink } from '../../services/storeLinks';
import LinkItem from '../components/LinkItem';

export default function MeusLinks() {
	const [myLinks, setMyLinks] = useState([]);
	const [data, setData] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [emptyList, setEmptyList] = useState(false);

	//chama quando a página é montada
	useEffect(() => {
		async function getLinks() {
			const response = await getLinksSaved('@encurtalink');

			if (response.length === 0) {
				setEmptyList(true);
			}

			setMyLinks(response);
		}

		getLinks();
	}, []);

	function handleOpenedLink(link) {
		setData(link);
		setShowModal(true);
	}

	async function handleDelete(id) {
		const result = await deleteLink(myLinks, id);

		if (result.length === 0) {
			setEmptyList(true);
		}

		setMyLinks(result);
	}

	return (
		<div className="containerLinks">
			<div className="linksHeader">
				<Link to="/">
					<FiArrowLeft size={38} color="#fff" />
				</Link>
				<h1>Meus Links</h1>
			</div>

			{emptyList && (
				<div className="linkItem">
					<h2 className="emptyText"> Sua lista está vazia... </h2>
				</div>
			)}

			{myLinks.map((link) => (
				<div key={link.id} className="linksItems">
					<button className="link" onClick={() => handleOpenedLink(link)}>
						<FiLink size={18} color="#fff" />
						{link.long_url}
					</button>
					<button className="linkDelete" onClick={() => handleDelete(link.id)}>
						<FiTrash size={24} color="#ff5454" />
					</button>
				</div>
			))}

			{showModal && (
				<LinkItem closeModal={() => setShowModal(false)} content={data} />
			)}
		</div>
	);
}
