import './SneakPeak.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ExerciseExample from './ExerciseExample';


function SneakPeak(){
    const [showModal, setShowModal] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const openModal = (exercise) => {
        setSelectedExercise(exercise);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedExercise(null);
    };

    const exercises = [
        {
            id: 1,
            title: 'Full Body',
            description: 'A set of exercises for your abdominal muscles.',
            exercises: '1. Squats 2. Push-Ups 3. Lunges 4. Plank with Shoulder Taps 5. Bridge Lifts 6. Side Lunges 7. Standing Leg Circles 8. Roll-Down to Stand 9. Arm and Leg Extensions 10. Standing Cat-Cow Stretch',
        },
        {
            id: 2,
            title: 'Abs',
            description: 'Exercises for your glute muscles.',
            exercises: '1. Roll-Downs 2. Sit Leg Raises 3. Scissor Kicks 4. Plank Knee Tucks 5. Leg Lifts 6. Crunches 7. Bicycle Crunches 8. Mountain Climbers 9. Oblique Twists 10. Reach-and-Squeeze',
        },
    ];

    return(
        <section className='sneakPeak'>
            <div className='sneakPeakBlock'>
                <h1>Sneak peak into daily exercise plan:</h1>
            </div>

            <Modal show={showModal} onClose={closeModal}>
                <ExerciseExample exercise={selectedExercise} />
            </Modal>

            <div className='sneakPeakBlock'>
                <div className='noBlurCards'>
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className='sneakPeakCard'>
                            <p>{exercise.title}</p>
                            <p>5 exercises</p>
                            <button className='seeMoreButton actibeButton' onClick={() => openModal(exercise)}>See More</button>
                        </div>
                    ))}
                </div>
                
                <div className='minBlurCards'>
                    <div className='sneakPeakCard'>
                        <p>Glutes</p>
                        <p>7 exercises</p>
                        <button className='seeMoreButton'>See More</button>
                    </div>
                </div>

                <div className='midBlurCards'>
                    <div className='sneakPeakCard'>
                        <p>Full Body</p>
                        <p>7 exercises</p>
                        <button className='seeMoreButton'>See More</button>
                    </div>
                    <div className='sneakPeakCard'>
                        <p>Full Body</p>
                        <p>7 exercises</p>
                        <button className='seeMoreButton'>See More</button>
                    </div>
                </div>

                <div className='maxBlurCards'>
                    <div className='sneakPeakCard'>
                        <p>Full Body</p>
                        <p>7 exercises</p>
                        <button className='seeMoreButton'>See More</button>
                    </div>
                    <div className='sneakPeakCard'>
                        <p>Full Body</p>
                        <p>7 exercises</p>
                        <button className='seeMoreButton'>See More</button>
                    </div>
                </div>
            </div>
            <div  className='sneakPeakBlock'>
                <p className='seeMoreParagraph'>Want to see more?</p>
                <Link to='/sign_up'><button  className='signUpButton'>Start your free trial!</button></Link>
            </div>
        </section>
    );
}

export default SneakPeak;