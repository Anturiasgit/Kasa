import './Banner.scss';
import imgHome from '../../assets/image_home.png'

function Banner() {
  return (
    <div className="banner">
      <h1>Chez vous, partout et ailleurs</h1>
      <img src={imgHome} alt="Bannière représentant la nature" />
      <div className="overlay"></div>
    </div>
  );
}

export default Banner;
