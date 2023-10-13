import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importa los estilos CSS

const NavBar = () => {
  return (
    <nav>
      <h3>Kasnya</h3>
      <div>
        <Link to="/remeras" className="button-link">
          Remeras
        </Link>
        <Link to="/tops" className="button-link">
          Tops
        </Link>
        <Link to="/gorros" className="button-link">
          Gorros
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
