import logo from './logo.svg';
import './App.css';
import GetQuestion from './components/GetQuestion'
import Question from './components/GetQuestion';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Jeopardy</h1>
      <h2>Score: </h2>
        {/* <Score /> */}
        <h2>Let's Play:</h2>
        <h2>Category</h2>
        <h2>Points:</h2>
        <GetQuestion />

    </div>
  );
}

export default App;
