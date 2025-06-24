import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <p id="error-code">404</p>
      <p id="error-text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" id="linkAccueil">Retourner sur la page d'accueil</Link>
    </div>
  );
}
export default NotFound
