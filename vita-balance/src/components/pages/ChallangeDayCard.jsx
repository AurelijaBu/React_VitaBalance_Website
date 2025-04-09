function ChallangeDayCard(props){
    return(
        <div className='dayCard'>
            <h2>{props.day}</h2>
            <ul>
                {props.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                ))}
            </ul>
        </div>
    )
}

export default ChallangeDayCard