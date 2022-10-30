import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<div className="menu">
			<a className="social" href="https://www.youtube.com/">
				<BsYoutube size={28} color="#fff" />
			</a>
			<a className="social" href="https://www.instagram.com/">
				<BsInstagram size={28} color="#fff" />
			</a>
			<Link className="menuItem" to="/links">
				Menu links
			</Link>
		</div>
	);
}
