import './App.css';
import Board from './components/Board'
import Header from './components/Header'
import InitialMessage from './components/InitialMessage';

function App() {
  return (
    <div className="App">
      <InitialMessage />
      <Header />
      <Board />
    </div>
  );
}

export default App;
