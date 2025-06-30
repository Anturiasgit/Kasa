import Banner from '../components/Banner/Banner'
import imgHome from '../assets/image_home.png'
import Card from '../components/Card/Card'
import { getLogements } from '../services/logements'

function Home() {
  return (
    <div>
      <Banner className="home-banner" image={imgHome} alt="Photo de la nature" title="Chez vous, partout et ailleurs"/>

      <div className="cards-container">
     {getLogements().map((logement) => (
        <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
     ))}
      </div>

    </div>
  );
}

export default Home;
