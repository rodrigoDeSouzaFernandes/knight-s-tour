import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import InitialMessage from "./components/InitialMessage";

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <InitialMessage />
        <Board />
      </main>
    </>
  );
}

export default App;
