import Banner from '../components/Banner/Banner'
import imgHome from '../assets/image_home.png'
import Card from '../components/Card/Card'
import logements from '../../logements.json'

function Home() {
  return (
    <div>
      <Banner image={imgHome} alt="Photo de la nature" title="Chez vous, partout et ailleurs"/>

      <div className="cards-container">
     {logements.map((logement) => (
      <Card cover={logement.cover} title={logement.title} />
     ))}
      </div>

    </div>
  );
}

export default Home;
