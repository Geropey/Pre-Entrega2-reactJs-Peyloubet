import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h3>Kasnya</h3>
      <div>
        <Link to="/category/remeras" className="button-link">
          Remeras
        </Link>
        <Link to="/category/tops" className="button-link">
          Tops
        </Link>
        <Link to="/category/gorros" className="button-link">
          Gorros
        </Link>
        <link to="/inicio" className='button-link'/>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
