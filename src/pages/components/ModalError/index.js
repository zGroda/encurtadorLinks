import './modalError.css';
import { TbFaceIdError } from 'react-icons/tb';
import { GrFormClose } from 'react-icons/gr';

export default function ModalError({ closeModalError }) {
	return (
		<div className="containerModalError">
			<div>
				<h1>Algo deu errado</h1>
				<TbFaceIdError size={30} color="#fff" />
				<button onClick={closeModalError}>
					<GrFormClose size={28} />
				</button>
			</div>
		</div>
	);
}
