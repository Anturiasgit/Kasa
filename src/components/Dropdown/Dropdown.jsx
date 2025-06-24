import './Dropdown.scss';
import { useState } from 'react';

function Dropdown({title,content}) {
    const [rotated, setRotated] = useState(false);
    const [displayed, setDisplayed] = useState(false);

    const handleClick = () => {
            setRotated(prev => !prev);
            setDisplayed(prev => !prev);
    };

    return (
        <div className="dropdown">
            <div className="title">
                <h1>{title}</h1>
                <img src="/arrow_up.png" alt="Flèche pour le dropdown" 
                className={`${rotated ? 'rotated' : ''}`} onClick={handleClick}/>
            </div>
            <div className={`content ${displayed ? 'displayed' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Dropdown
