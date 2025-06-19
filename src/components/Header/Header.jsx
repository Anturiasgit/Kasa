import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'


function Header() {
  return (
    <header>
        <img src={logo} alt="Logo de Kasa"/>
      <nav>
        <ul>
          <li id="accueil"><Link to="/">Accueil</Link></li>
          <li><Link to="/a-propos">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
