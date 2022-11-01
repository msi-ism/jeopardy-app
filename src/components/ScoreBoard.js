import {useState} from 'react'


const ScoreBoard = () => {

    const [score, setScore] = useState(0)

    const increaseScore = () => {
        setScore(score +  1)
        console.log(score)
    }
    const decreaseScore = () => {
        setScore(score -  1)
        console.log(score)
    }
    
    return(
        <div>
            <h2>Score: {score}</h2>
            <div className='buttons'>
                <input onClick={increaseScore} type='button' value='Increase'></input>
                <input onClick={decreaseScore}type='button' value='Decrease'></input>
            </div>
        </div>
    )
}

export default ScoreBoard