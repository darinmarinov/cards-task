import React from 'react';

const CardItem = ({id, name, body, index, removeItem}) => {

    return (
        <li className="cards__item fadeInLeft animated" style={{animationDelay: `${index}s`}}>
            <div className="card">
                <div className='card__image'  style={{backgroundImage: `url(https://source.unsplash.com/collection/${id}/550x500)`}}></div>
                <div className="card__content">
                    <h2 className="card__title">{name}</h2>
                    <p className="card__text">{body}</p>
                    <button className="btn btn--block" onClick={(e) => { removeItem(index)}}>Remove Button</button>
                </div>
            </div>
        </li>
    )
}

export default CardItem;
