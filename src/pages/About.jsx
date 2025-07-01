import Banner from '../components/Banner/Banner'
import imgAbout from '../assets/image_about.png'
import Collapse from '../components/Collapse/Collapse'
import about from '../../about.json'

function About() {
  return ( 
    <div>
      <Banner className="about-banner" image={imgAbout} alt="Photo d'une montagne"/>

      {about.map((ab) => (
      <Collapse title={ab.title} content={ab.content}/> 
      ))}

    </div>
  )
}

export default About
