import './card.css';

function Card({title,description,url}) {

    return (
        <div className="card">
            <h1 className='card__title'> {title}</h1>
            <p className='card__description'>{description}</p>
            <img src={url} alt="" />
        </div>
    )
}

export default Card;