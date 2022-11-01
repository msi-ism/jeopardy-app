import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Question = () => {
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        getQuestion()
    }, [])

    const url = 'http://jservice.io/api/random'

    const getQuestion = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setQuestion(data)
        } catch (error) {
            console.log(error)
        }
    }

    const loaded = () => {
        return(
            <div>
                <h2>Answer:</h2><p>{question[0].question}</p>
            </div>
        )
    }

    const loading = () => {
        return(
            <div>
                <h1>Loading answer</h1>
            </div>
        )
    }


    return(
        <div>
            {question && question[0].question ? loaded(): loading()}
        </div>
    )

}

export default Question