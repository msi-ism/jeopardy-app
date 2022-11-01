import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Form from './components/Form';
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
      } catch (error) {
          console.log(error)
      }
  }

  const loaded = () => {
    if (question) {
        return(
            <div>
                <h2>Answer:</h2><p>{question[0].question}</p>
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


  
  return (
    <div className="App">
      <h1>Welcome to Jeopardy</h1>
    
      <ScoreBoard />
      <h2>Let's Play:</h2>
      <Form getQuestion={getQuestion}/>
      {/* <h2>Category:{question[0].category}</h2> */}
      <h2>Points:</h2>
      {loaded()}
    </div>
  );
}

export default App;
