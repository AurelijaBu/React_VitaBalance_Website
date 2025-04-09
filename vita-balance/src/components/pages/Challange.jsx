import './Challange.css'
import ChallangeDayList from './ChallangeDayList';
import { useState, useEffect } from 'react';
import Modal from '../Modal';

function Challange() {
  const [showModal, setShowModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const exerciseTitles = [
    'Wall Sit',
    'Wall Sit-up',
    'Wall Push-up',
    'Booty Bridge',
    'Leg Up',
  ];

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/exercises/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed fetching exrcises');
        return res.json();
      })
      .then((data) => {
        const filteredExercises = data.filter((exercise) =>
          exerciseTitles.includes(exercise.title)
        );
        setExercises(filteredExercises);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedExercise(null);
    setShowModal(false);
  };

  const exerciseNumbers = ['A', 'B', 'C', 'D', 'E'];

  const formatSteps = (steps) => {
    const stepList = steps.split('.').filter((step) => step.trim() !== '');
    return stepList.map((step, index) => (
      <p key={index}>{index + 1}. {step.trim()}</p>
    ));
  };

  return(
    <section className='challengeSection'>
      <div className='challengeHeader'>
        <div>
          <h1>WALL EXERCISE</h1>
          <p>
            Reshape your body with a few moves. <br />
            <br />
            Challenge Yourself. Transform Your Body.
          </p>
          <a href='#startChallenge'>JOIN THE CHALLENGE</a>
        </div>
      </div>

      <div className='exerciseExampleSection' id='startChallenge'>
        <h1>Exercises</h1>
        <div className='exerciseExamples'>
          {loading && <p>Loading exercises...</p>}
          {!loading &&
            exercises.map((exercise, index) => (
              <div key={exercise.id} className='exerciseCard'>
                <p>{`${exerciseNumbers[index]}. ${exercise.title}`}</p>
                <button className='detailsButton' onClick={() => openModal(exercise)}>
                  Details
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        {selectedExercise ? (
          <div className='exerciseModalContent'>
            <h2>{selectedExercise.title}</h2>
            <p><strong>Description:</strong> {selectedExercise.description}</p>
            <p><strong>Steps:</strong></p>
            <div>{formatSteps(selectedExercise.steps)}</div>
            <p><strong>Muscle group:</strong> {selectedExercise.muscle_group?.name}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal>

      <div className='challengeDaySection'>
        <h1>Challenge</h1>
        <ChallangeDayList />
      </div>
    </section>
  );
}

export default Challange;