import Banner from '../components/Banner';
import Card from '../components/Card';
// Tu importeras ensuite tes données si tu en as (JSON ou API)

function Home() {
  return (
    <div>
      <Banner
        image="/images/banner.jpg"
        text="Chez vous, partout et ailleurs"
      />

      <section className="cards-container">
        <Card title="Titre de la location" image="/images/1.jpg" />
        <Card title="Titre de la location" image="/images/2.jpg" />
        <Card title="Titre de la location" image="/images/3.jpg" />
        <Card title="Titre de la location" image="/images/4.jpg" />
        <Card title="Titre de la location" image="/images/5.jpg" />
        <Card title="Titre de la location" image="/images/6.jpg" />
        {/* Répète pour tous tes logements ou map sur un tableau */}
      </section>
    </div>
  );
}

export default Home;
