import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Form from './components/Form';
import Reveal from './components/Reveal';
import {useState, useEffect} from 'react'

function App() {
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
          document.querySelector(".reveal").style.display = 'none'
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
            <div className='main-container'>
                <h2 className='title'>Welcome to React Jeopardy!</h2>
                <ScoreBoard />
                <h2>Let's Play:</h2>
                <Form getQuestion={getQuestion}/>
                <h2 className='main-text'>Category: </h2> 
                <h3 className='subtext'>{question[0].category.title.charAt(0).toUpperCase() + question[0].category.title.slice(1)}</h3>
                <h2>Answer:</h2>
                <h3>{question[0].question}</h3>
                <h2>Points: </h2> 
                <h3>{question[0].value}</h3>
                <h2 className=''>Question:</h2>
                <h3 className='reveal'>{question[0].answer}</h3>
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
