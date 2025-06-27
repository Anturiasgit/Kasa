import Slideshow from '../components/Slideshow/Slideshow'
import { useParams } from 'react-router-dom';
import { getLogementsById } from '../services/logements';
import { Link } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse';
import '../FicheLogement.scss'
import Ratings from '../components/Ratings/Ratings'


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
        <div className='fiche-logement'>
            <Slideshow logement={logement} />

            <div className="infos">
                <div className="title-tags">
                <h1 id="title">{logement.title}</h1>
                <p id="location">{logement.location}</p> 
                {logement.tags.map((tag) => (
                <button key={tag} id="tag"> {tag} </button>     
                ))} 
                </div>
                
                <div className="host-ratings">
                <div id="host">
                <p id="host-name">{logement.host.name}</p>
                <img id="host-picture" src={logement.host.picture} alt="Photo du propriétaire" />
                </div> 
                <div className='ratings'>
                <Ratings rating={parseInt(logement.rating)} />
                </div>           
                </div>
             </div>   
   
            <div className='description-equipements'>
                <Collapse title="Description" content={logement.description}/>
                <Collapse title="Equipements"  content={logement.equipments.map((e, i) => (
                     <span key={i}>
                            {e}
                            <br />
                        </span>   
                        ))}
                        />
             </div>
        </div>
        );
    }   
}

export default FicheLogement


