import './Card.css'

function CardImage(props){
    return(
        <div className='cardImage'>
            <img className='cardImg' src={props.source} alt={props.title} />
        </div>
    )
}

export default CardImage