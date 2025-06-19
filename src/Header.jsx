import { Link } from 'react-router-dom'
import logo from './assets/logo.png'


function Header() {
  return (
    <header>
        <img src={logo} alt="Logo de Kasa"/>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/a-propos">À propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
