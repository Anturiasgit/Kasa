import './Card.scss';

function Card({cover, title}) {
  return (
      <a className="card">
        <img src={cover} alt={title}/>
        <div className="card-title">
            <p>{title}</p>
        </div>
      </a>
  );
}


export default Card;
