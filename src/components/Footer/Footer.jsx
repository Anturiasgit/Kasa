import logoBlack from '../../assets/logo_black.png'
import './footer.scss'


function Footer() {
  return (
    <footer>
      <img src={logoBlack} alt="Logo de Kasa" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
