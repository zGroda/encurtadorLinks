import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function MeusLinks() {
  return (
    <div className="containerLinks">
      <div className="linksHeader">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="linksItems">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://dale.com
        </button>
        <button className="linkDelete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>

      <div className="linksItems">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://dale.com
        </button>
        <button className="linkDelete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  );
}
