import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <header className='container'>
      <Link to="/">
        <img className='logo' src="icon/azaleia.png" alt="Ícone da logo" />
      </Link>
      <div className='wrapper'>
        <Link to="/" className="logo-link">
          <h1>Azalleia</h1>
        </Link>
      </div>
      <nav className={`Nav ${menuOpen ? 'show' : ''}`}>
        <Link to="/">Pagina Inicial</Link>
        <Link to="/src/PAGINAS/Catalago.jsx">Catalago</Link>
        <Link to="/src/PAGINAS/Lancament.jsx">Lançamentos</Link>
        <Link to="/src/PAGINAS/Contatos.jsx">Contato</Link>
      </nav>
      <button
        className="hamburger"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
}

export default Header;
