import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.scss'


function Header() {
  return (
    <header>
        <img src={logo} alt="Logo de Kasa"/>
      <nav>
        <ul>
          <li id="accueil">
          <NavLink to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Accueil
          </NavLink></li>
          <li id="a-propos">
            <NavLink to="/a-propos"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              A Propos
            </NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
