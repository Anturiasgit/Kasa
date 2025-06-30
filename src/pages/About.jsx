import Banner from '../components/Banner/Banner'
import imgAbout from '../assets/image_about.png'
import Collapse from '../components/Collapse/Collapse'
import collapses from '../../collapses.json'

function About() {
  return ( 
    <div>
      <Banner className="about-banner" image={imgAbout} alt="Photo d'une montagne"/>

      {collapses.map((collapse) => (
      <Collapse title={collapse.title} content={collapse.content}/> 
      ))}

    </div>
  )
}

export default About
