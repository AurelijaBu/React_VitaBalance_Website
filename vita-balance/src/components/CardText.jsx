import './Card.css'

function CardText(props){
    return(
        <div className='cardText'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default CardText