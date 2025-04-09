function ExerciseExample({ exercise }) {
    if (!exercise) return null;

    const formatExercises = (exercises) => {
        const steps = exercises
            .split(/\d+\./)
            .filter(step => step.trim() !== '')
            .map((item, index) => {
                return <p key={index}>{index + 1}. {item.trim()}</p>;
            });
        return steps;
    };

    return (
        <div>
            <h2>{exercise.title}</h2>
            <p>{exercise.description}</p>
            <h4>Exercises:</h4>
            <div>
                {formatExercises(exercise.exercises)}
            </div>
        </div>
    );
}

export default ExerciseExample;