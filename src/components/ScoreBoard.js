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

    const resetScore = () => {
        setScore(score - score)
    }
    
    return(
        <div>
            <h2>Score: {score}</h2>
            <div className='buttons'>
                <input className='decrease' onClick={decreaseScore}type='button' value='Decrease'></input>
                <input className='increase' onClick={increaseScore} type='button' value='Increase'></input>
                <input className='reset' onClick={resetScore} type='button' value='Reset'></input>
            </div>
        </div>
    )
}

export default ScoreBoard