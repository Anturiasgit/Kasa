import Banner from '../components/Banner/Banner'
import imgAbout from '../assets/image_about.png'
import Dropdown from '../components/Dropdown/Dropdown'
// import dropdowns from '../dropdowns.json'

function About() {
  return ( 
    <div>
      <Banner image={imgAbout} alt="Photo d'une montagne"/>

      <Dropdown />
      {/* <Dropdown title={dropdown.title} content={dropdown.content}/> */}

    </div>
  )
}

export default About
