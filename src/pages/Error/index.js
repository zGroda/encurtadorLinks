import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className="containerError">
			<img src="notfound02.png" alt="Pagina nao encontrada"></img>
			<h1>Página não encontrada!</h1>
			<Link to="/">Voltar para a Home</Link>
		</div>
	);
}
