import './Card.scss';

function Card({cover, title}) {
  return (
      <div className="card">
        <img src={cover} alt={title}/>
        <div className="card-title">
            <p>{title}</p>
        </div>
      </div>
  );
}


export default Card;
