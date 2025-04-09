import CardImage from './CardImage';
import CardText from './CardText';
import './CardsList.css'

function CardsList(){
    const cardData = [
        {
            id: 1,
            title: 'Consistency is Key',
            content: "Sticking to a routine is the key to long-term fitness success. Whether it's strength training, yoga, or cardio, small daily efforts lead to big results over time. The best workout is the one you can do consistently!",
            image: 'consistensy_is_key.jpg',
            imageTitle: "Close-up of a woman's waist being measured with a tape. Fitness and health concept. Stock Photo",
            layout: 'text-first',
        },
        {
            id: 2,
            title: 'Fuel Your Performance',
            content: "What you eat impacts how you train! A well-balanced diet rich in protein, healthy fats, and complex carbs fuels your energy, supports muscle growth, and aids recovery. Nutrition and fitness go hand in hand—choose wisely!",
            image: 'healthy_meal.jpg',
            imageTitle: "A delicious and healthy breakfast bowl topped with bananas, blueberries, and walnuts on a white surface. Stock Photo",
            layout: 'text-first',
            styleId: 'cardSmallScreen' 
        },
        {
            id: 2,
            title: 'Fuel Your Performance',
            content: "What you eat impacts how you train! A well-balanced diet rich in protein, healthy fats, and complex carbs fuels your energy, supports muscle growth, and aids recovery. Nutrition and fitness go hand in hand—choose wisely!",
            image: 'healthy_meal.jpg',
            imageTitle: "A delicious and healthy breakfast bowl topped with bananas, blueberries, and walnuts on a white surface. Stock Photo",
            layout: 'image-first',
            styleId: 'cardWideScreen' 
        },
        {
            id: 3,
            title: 'Mind Over Muscle',
            content: "Fitness is not just about physical strength—it's about mental resilience too. Pushing through discomfort, staying disciplined, and embracing challenges all contribute to success. Your body achieves what your mind believes!",
            image: 'motivation.jpg',
            imageTitle: "Male athlete with prosthetic leg sitting in a sunlit gym, embodying strength and determination. Stock Photo",
            layout: 'text-first',
        }
    ]

    return(
        <section className='cardsList'>
            {cardData.map(({ id, title, content, image, layout, styleId, imageTitle}) => (
                <div key={id} className='card' id={styleId}>
                    {layout === 'text-first' ? (
                        <>
                            <CardText title={title} content={content} />
                            <CardImage source={image} title={imageTitle} />
                        </>
                    ) : (
                        <>
                            <CardImage source={image} title={imageTitle} />
                            <CardText title={title} content={content} />
                        </>
                    )}
                </div>
            ))}
        </section>
    )
}

export default CardsList