import ChallangeDayCard from './ChallangeDayCard';

function ChallangeDayList(){
    const daysData = [
        { day: 'DAY 1', exercises: ['A. 20 seconds', 'B. 6 reps', 'C. 6 reps', 'D. 6 reps', 'E. 20 seconds'] },
        { day: 'DAY 2', exercises: ['A. 20 seconds', 'B. 8 reps', 'C. 8 reps', 'D. 8 reps', 'E. 20 seconds'] },
        { day: 'DAY 3', exercises: ['A. 25 seconds', 'B. 7 reps', 'C. 7 reps', 'D. 7 reps', 'E. 25 seconds'] },
        { day: 'DAY 4', exercises: ['A. 30 seconds', 'B. 8 reps', 'C. 8 reps', 'D. 8 reps', 'E. 30 seconds'] },
        { day: 'DAY 5', exercises: ['A. 35 seconds', 'B. 10 reps', 'C. 10 reps', 'D. 10 reps', 'E. 35 seconds'] },
        { day: 'DAY 6', exercises: ['A. 40 seconds', 'B. 12 reps', 'C. 12 reps', 'D. 12 reps', 'E. 40 seconds'] },
        { day: 'DAY 7', exercises: ['A. 45 seconds', 'B. 14 reps', 'C. 14 reps', 'D. 14 reps', 'E. 45 seconds'] },
        { day: 'DAY 8', exercises: ['A. 50 seconds', 'B. 16 reps', 'C. 16 reps', 'D. 16 reps', 'E. 50 seconds'] },
        { day: 'DAY 9', exercises: ['A. 55 seconds', 'B. 18 reps', 'C. 18 reps', 'D. 18 reps', 'E. 55 seconds'] },
        { day: 'DAY 10', exercises: ['A. 60 seconds', 'B. 20 reps', 'C. 20 reps', 'D. 20 reps', 'E. 60 seconds'] },
        { day: 'DAY 11', exercises: ['A. 60 seconds', 'B. 20 reps', 'C. 20 reps', 'D. 20 reps', 'E. 60 seconds'] },
        { day: 'DAY 12', exercises: ['A. 65 seconds', 'B. 22 reps', 'C. 22 reps', 'D. 22 reps', 'E. 65 seconds'] },
        { day: 'DAY 13', exercises: ['A. 70 seconds', 'B. 24 reps', 'C. 24 reps', 'D. 24 reps', 'E. 70 seconds'] },
        { day: 'DAY 14', exercises: ['A. 75 seconds', 'B. 26 reps', 'C. 26 reps', 'D. 26 reps', 'E. 75 seconds'] },
        { day: 'DAY 15', exercises: ['A. 80 seconds', 'B. 28 reps', 'C. 28 reps', 'D. 28 reps', 'E. 80 seconds'] },
        { day: 'DAY 16', exercises: ['A. 85 seconds', 'B. 30 reps', 'C. 30 reps', 'D. 30 reps', 'E. 85 seconds'] },
        { day: 'DAY 17', exercises: ['A. 90 seconds', 'B. 32 reps', 'C. 32 reps', 'D. 32 reps', 'E. 90 seconds'] },
        { day: 'DAY 18', exercises: ['A. 95 seconds', 'B. 34 reps', 'C. 34 reps', 'D. 34 reps', 'E. 95 seconds'] },
        { day: 'DAY 19', exercises: ['A. 100 seconds', 'B. 36 reps', 'C. 36 reps', 'D. 36 reps', 'E. 100 seconds'] },
        { day: 'DAY 20', exercises: ['A. 105 seconds', 'B. 38 reps', 'C. 38 reps', 'D. 38 reps', 'E. 105 seconds'] },
        { day: 'DAY 21', exercises: ['A. 110 seconds', 'B. 40 reps', 'C. 40 reps', 'D. 40 reps', 'E. 110 seconds'] },
        { day: 'DAY 22', exercises: ['A. 115 seconds', 'B. 42 reps', 'C. 42 reps', 'D. 42 reps', 'E. 115 seconds'] },
        { day: 'DAY 23', exercises: ['A. 120 seconds', 'B. 44 reps', 'C. 44 reps', 'D. 44 reps', 'E. 120 seconds'] },
        { day: 'DAY 24', exercises: ['A. 125 seconds', 'B. 46 reps', 'C. 46 reps', 'D. 46 reps', 'E. 125 seconds'] },
        { day: 'DAY 25', exercises: ['A. 130 seconds', 'B. 48 reps', 'C. 48 reps', 'D. 48 reps', 'E. 130 seconds'] },
        { day: 'DAY 26', exercises: ['A. 135 seconds', 'B. 50 reps', 'C. 50 reps', 'D. 50 reps', 'E. 135 seconds'] },
        { day: 'DAY 27', exercises: ['A. 140 seconds', 'B. 52 reps', 'C. 52 reps', 'D. 52 reps', 'E. 140 seconds'] },
        { day: 'DAY 28', exercises: ['A. 145 seconds', 'B. 54 reps', 'C. 54 reps', 'D. 54 reps', 'E. 145 seconds'] },
        { day: 'DAY 29', exercises: ['A. 150 seconds', 'B. 56 reps', 'C. 56 reps', 'D. 56 reps', 'E. 150 seconds'] },
        { day: 'DAY 30', exercises: ['A. 150 seconds', 'B. 60 reps', 'C. 60 reps', 'D. 60 reps', 'E. 150 seconds'] },
    ];
    
    return(
        <div className='challengeCardsBlock'>
            {daysData.map((data, index) =>(
                <ChallangeDayCard key={index} day={data.day} exercises={data.exercises}/>
            ))}
        </div>
    )
}

export default ChallangeDayList