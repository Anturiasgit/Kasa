import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'

// Tu importeras ensuite tes données si tu en as (JSON ou API)

function Home() {
  return (
    <div>
      <Banner />

      <div className="cards-container">
       <Card image="../assets/image_home.png" text="titre de la location 1"/> 
       <Card image="../assets/image_home.png" text="titre de la location 2"/> 
       <Card image="../assets/image_home.png" text="titre de la location 3"/> 
       <Card image="../assets/image_home.png" text="titre de la location 4"/> 
       <Card image="../assets/image_home.png" text="titre de la location 5"/> 
       <Card image="../assets/image_home.png" text="titre de la location 6"/> 
      </div>

    </div>
  );
}

export default Home;
