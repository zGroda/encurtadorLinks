import { FiLink } from "react-icons/fi";
import './home.css';
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="logo">
        <img src="/logo.png" alt="Link Logo" />
        <h1>Meus links</h1>
        <span>Cole o link para encurtar 👇</span>
      </div>
      <div className="areaInput">
        <div>
          <FiLink size={24} color="#fff"/>
          <input placeholder="Cole seu link aqui..."/>
        </div>
        <button>Encurtar Link</button>
      </div>

      <Menu />
    </div>
  );
}
