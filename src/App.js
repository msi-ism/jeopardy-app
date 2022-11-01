import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Form from './components/Form';
import Reveal from './components/Reveal';
import {useState, useEffect} from 'react'

function App() {
  const [question, setQuestion] = useState(null)
  let score = 0

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
   
  const revealQuestion = () => {
    document.querySelector(".reveal").style.display = 'block'
    }

  const letsPlay = () => {
    if (question) {
        return(
            <div>
                <h1>Welcome to Jeopardy</h1>
                <ScoreBoard score={score}/>
                <h2>Let's Play:</h2>
                <Form getQuestion={getQuestion}/>
                <h2>Category: </h2> {question[0].category.title.toUpperCase()}
                <h2>Points: </h2> {question[0].value}
                <h2>Answer:</h2><p>{question[0].question}</p>
                <h2 className=''>Question:</h2><p className='reveal'>{question[0].answer}</p>
                <Reveal revealQuestion={revealQuestion}/>


            </div>
        )
    } else {
      return(
          <div>
              <h2>Still loading...</h2>
          </div>
      )
    }
  }

  const points = () => {

  }


  
  return (
    <div className="App">
        {letsPlay()}
    </div>
  );
}

export default App;
