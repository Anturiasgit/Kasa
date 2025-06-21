import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import logements from '../../logements.json'

// Tu importeras ensuite tes données si tu en as (JSON ou API)

function Home() {
  return (
    <div>
      <Banner />

      <div className="cards-container">
     {logements.map((logement) => (
      <Card cover={logement.cover} title={logement.title} />
     ))}
      </div>

    </div>
  );
}

export default Home;
