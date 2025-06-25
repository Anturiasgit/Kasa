import Slideshow from '../components/Slideshow/Slideshow'
import { useParams } from 'react-router-dom';
import { getLogementsById } from '../services/logements';
import { Link } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse';

function FicheLogement() {
    const { id } = useParams();
    const logement = getLogementsById(id);
    const title = logement.title;
    const location = logement.location;
    const tags = location.tags;
    const host = location.host;


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

            <h1>{title}</h1>
            <p>{location}</p>
            {host.map((infoHost) => (
                <div id="host">
                 <p>{infoHost.name}</p>
                <img src={infoHost.picture} alt="Photo du propriétaire" />
                </div>
            ))}
            <p></p>
            {tags.map((tag) => (
               <button> {tag} </button>     
            ))} 
            
            <Collapse title="Description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ea voluptates! Exercitationem, asperiores commodi amet ullam est quibusdam ratione adipisci, error repudiandae voluptatibus cum similique odio aliquid deserunt soluta."/>
            <Collapse title="Equipements" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ea voluptates! Exercitationem, asperiores commodi amet ullam est quibusdam ratione adipisci, error repudiandae voluptatibus cum similique odio aliquid deserunt soluta."/>
        </div>
        );
    }   
}

export default FicheLogement


