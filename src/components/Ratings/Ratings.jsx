import './Ratings.scss'

function Ratings({ rating }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span key={i} style={{ color: i < rating ? '#FF6060' : '#E3E3E3'}}>
        ★
      </span>
    );
  }

  return <div className="stars">{stars}</div>;
}

export default Ratings;
