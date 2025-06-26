import './Collapse.scss';
import { useState } from 'react';

function Collapse({title,content}) {
    const [rotated, setRotated] = useState(false);
    const [displayed, setDisplayed] = useState(false);

    const handleClick = () => {
            setRotated(prev => !prev);
            setDisplayed(prev => !prev);
    };

    return (
        <div className="collapse">
            <div className="title">
                <h1>{title}</h1>
                <img src="/arrow_up.png" alt="Flèche" 
                className={`${rotated ? 'rotated' : ''}`} onClick={handleClick}/>
            </div>
            <div className={`content ${displayed ? 'displayed' : ''}`}>
              <p>{content}</p>
            </div>
        </div>
    )
}

export default Collapse
