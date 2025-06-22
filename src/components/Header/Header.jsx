import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.scss'


function Header() {
  return (
    <header>
        <img src={logo} alt="Logo de Kasa"/>
      <nav>
        <ul>
          <li id="accueil"><NavLink to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Accueil
      </NavLink></li>
          <li><Link to="/a-propos">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
