import React from 'react';
import './Card.css'; 

const Card = (props) => {
        return(
            <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='book' src={props.image}/>
                <div>
                    <h2>{props.book}</h2>
                    <p>{props.name}</p>
                </div>
            </div>
        )
}

export default Card;