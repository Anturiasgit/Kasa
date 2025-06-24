import Slideshow from '../components/Slideshow/Slideshow'
import { useParams } from 'react-router-dom';
import { getLogementsById } from '../services/logements';


function FicheLogement() {
    const { id } = useParams();

    const logement = getLogementsById(id);

    if(!logement) {
        return(
            <div>
            <h1>Logement non trouvé</h1>
            <Link to="/">Retour à l'accueil</Link>
            </div>
        );
    } else {
         return (
        <div>
            <Slideshow logement={logement} />

        </div>
        );
    }   
}

export default FicheLogement


