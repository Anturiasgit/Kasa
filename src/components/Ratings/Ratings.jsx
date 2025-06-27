import './Ratings.scss'
import fullStar from '/full-star.png'
import emptyStar from '/empty-star.png'

function Ratings({ rating }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
      stars.push(
      <img src={i < rating ? fullStar : emptyStar}
      alt={i < rating ? 'étoile pleine' : 'étoile vide'} 
      className={i < rating ? 'full-star' : 'empty-star'}/>);
  }

  return <div className="ratings">{stars}</div>;
}

export default Ratings;
