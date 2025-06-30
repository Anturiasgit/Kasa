import './Banner.scss';

function Banner({image, alt, title, className}) {
  return (
    <div className={`banner ${className}`}>
      <h1>{title}</h1>
      <img src={image} alt={alt} />
      <div className="overlay"></div>
    </div>
  );
}

export default Banner;
